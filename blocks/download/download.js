/**
 * Download block — Migrated from AEM: wknd/components/download
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const [fileCell, titleCell, descCell] = [...row.children];
    const link = fileCell && fileCell.querySelector('a');
    if (!link) return;

    link.className = 'download-link button';
    link.setAttribute('download', '');

    const wrapper = document.createElement('div');
    wrapper.className = 'download-item';

    if (titleCell) {
      const title = document.createElement('span');
      title.className = 'download-title';
      title.textContent = titleCell.textContent.trim();
      wrapper.appendChild(title);
    }
    if (descCell && descCell.textContent.trim()) {
      const desc = document.createElement('p');
      desc.className = 'download-desc';
      desc.textContent = descCell.textContent.trim();
      wrapper.appendChild(desc);
    }
    wrapper.appendChild(link);
    row.replaceWith(wrapper);
  });
}
