// Reveal a grouped project when visitors follow a direct link to it.
function revealLinkedProject() {
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }
  if (!id) return;
  const target = document.getElementById(id);
  const group = target?.closest('.project-group');
  if (!group) return;
  group.open = true;
  requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
}

revealLinkedProject();
window.addEventListener('hashchange', revealLinkedProject);
