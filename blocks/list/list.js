/**
 * List block — Migrated from AEM: wknd/components/list, wknd/components/image-list
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const isOrdered = block.classList.contains('ordered');
  const list = document.createElement(isOrdered ? 'ol' : 'ul');
  list.className = 'list-items';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.firstElementChild ? row.firstElementChild.innerHTML : row.textContent;
    list.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(list);
}
