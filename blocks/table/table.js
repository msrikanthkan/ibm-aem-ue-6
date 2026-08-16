/**
 * Table block — Migrated from AEM: dam/cfm/components/grid
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length === 0) return;

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  rows.forEach((row, i) => {
    const tr  = document.createElement('tr');
    const tag = i === 0 ? 'th' : 'td';
    [...row.children].forEach((cell) => {
      const el = document.createElement(tag);
      el.innerHTML = cell.innerHTML;
      if (i === 0) el.scope = 'col';
      tr.appendChild(el);
    });
    if (i === 0) thead.appendChild(tr);
    else tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  block.textContent = '';
  block.appendChild(table);
}
