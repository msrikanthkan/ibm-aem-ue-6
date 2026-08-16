/**
 * Breadcrumb block
 * Migrated from AEM: wknd/components/breadcrumb
 *
 * @param {HTMLElement} block - The block element decorated by EDS runtime
 */
export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'breadcrumb');
  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  [...block.children].forEach((row, i, arr) => {
    const li = document.createElement('li');
    li.className = 'breadcrumb-item';
    const link = row.querySelector('a');
    if (link) {
      li.appendChild(link);
    } else {
      li.textContent = row.textContent.trim();
    }
    if (i === arr.length - 1) {
      li.setAttribute('aria-current', 'page');
    }
    ol.appendChild(li);
  });

  nav.appendChild(ol);
  block.textContent = '';
  block.appendChild(nav);
}
