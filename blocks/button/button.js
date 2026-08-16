/**
 * Button block — Migrated from AEM: wknd/components/button
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    link.className = ['button', ...[...block.classList]
      .filter(c => ['secondary', 'outline', 'large'].includes(c))].join(' ');
    block.replaceWith(link);
  }
}
