/**
 * Accordion block
 * Migrated from AEM: wknd/components/accordion
 *
 * EDS block contract: content is delivered as a table in the document.
 * Each row in the table becomes a <div> row inside the block element.
 * Each cell in a row becomes a <div> cell inside that row.
 *
 * @param {HTMLElement} block - The block element decorated by EDS runtime
 */
export default function decorate(block) {
  // Each row = one accordion item: Cell 1 = header, Cell 2 = body
  const items = [...block.children];
  block.textContent = '';

  items.forEach((item) => {
    const [headerCell, bodyCell] = [...item.children];
    if (!headerCell) return;

    const details  = document.createElement('details');
    const summary  = document.createElement('summary');
    summary.className = 'accordion-header';
    summary.innerHTML = headerCell.innerHTML;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    if (bodyCell) body.innerHTML = bodyCell.innerHTML;

    details.appendChild(summary);
    details.appendChild(body);
    block.appendChild(details);
  });
}
