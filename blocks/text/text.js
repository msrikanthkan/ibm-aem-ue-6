/**
 * Text block — Migrated from AEM: wknd/components/text
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const content = block.firstElementChild;
  if (content) block.replaceWith(content);
}
