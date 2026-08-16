/**
 * Separator block — Migrated from AEM: wknd/components/separator
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  block.replaceWith(document.createElement('hr'));
}
