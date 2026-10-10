const enquiryRecipients = {
  Project: 'studios@alteturia.com',
  General: 'support@alteturia.com',
  Partnership: 'support@alteturia.com',
  'Learning & participation': 'hub@alteturia.com',
  'Media & creative': 'media@alteturia.com',
  Recruitment: 'recruitment@alteturia.com',
  Privacy: 'privacy@alteturia.com'
};

document.querySelectorAll('[data-enquiry]').forEach(form => {
  const typeInput = form.elements.type;
  const type = new URLSearchParams(location.search).get('type');
  if ([...typeInput.options].some(option => option.value === type)) typeInput.value = type;
  const getRecipient = () => enquiryRecipients[typeInput.value] || enquiryRecipients.General;
  let draftRecipient = getRecipient();
  const updateRecipient = () => {
    const recipient = getRecipient();
    form.querySelector('[data-enquiry-recipient]').textContent = recipient;
    form.querySelector('[data-enquiry-direct]').href = `mailto:${recipient}`;
    form.querySelector('[data-enquiry-preview]').hidden = true;
    form.querySelector('#enquiry-draft').value = '';
    form.querySelector('[data-enquiry-status]').textContent = '';
  };
  typeInput.addEventListener('change', updateRecipient);
  updateRecipient();

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const message = String(data.get('message')).trim();
    const status = form.querySelector('[data-enquiry-status]');
    if (!name || !message) { status.textContent = 'Please enter your name and a message.'; return; }
    draftRecipient = getRecipient();
    const subject = `${data.get('type')} enquiry - ${name}`;
    const body = `Name: ${name}\nEmail: ${data.get('email')}\nEnquiry: ${data.get('type')}\n\n${message}`;
    form.querySelector('[data-enquiry-preview]').hidden = false;
    form.querySelector('#enquiry-draft').value = `To: ${draftRecipient}\nSubject: ${subject}\n\n${body}`;
    status.textContent = 'Your enquiry is ready. Review and send it in your email app. If no app opens, copy the enquiry and email us directly.';
    location.href = `mailto:${draftRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  form.querySelector('[data-copy-enquiry]').addEventListener('click', async () => {
    const draft = form.querySelector('#enquiry-draft');
    const status = form.querySelector('[data-enquiry-status]');
    try { await navigator.clipboard.writeText(draft.value); status.textContent = `Enquiry copied. Paste it into your email and send it to ${draftRecipient}.`; }
    catch { draft.focus(); draft.select(); status.textContent = 'Select and copy the enquiry, then send it from your email app.'; }
  });
});
