/**
 * Fragment block — Migrated from AEM: wknd/components/experiencefragment
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  const fragmentPath = link ? link.getAttribute('href') : block.textContent.trim();
  if (!fragmentPath) return;

  block.textContent = '';
  const loader = document.createElement('p');
  loader.textContent = 'Loading fragment\u2026';
  block.appendChild(loader);

  fetch(`${fragmentPath}.plain.html`)
    .then((res) => {
      if (!res.ok) throw new Error(`Fragment not found: ${fragmentPath}`);
      return res.text();
    })
    .then((html) => { block.innerHTML = html; })
    .catch(() => { block.innerHTML = `<p>Fragment could not be loaded: ${fragmentPath}</p>`; });
}
