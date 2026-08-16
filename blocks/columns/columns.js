/**
 * Columns block — Migrated from AEM: wknd/components/container
 * ⚠️  LOW CONFIDENCE — review each page after migration.
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.className = 'columns-col';
    });
  });
}
