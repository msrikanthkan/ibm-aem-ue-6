/**
 * Heading block — Migrated from AEM: wknd/components/title
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const level = [...block.classList].find(c => /^h[1-6]$/.test(c)) || 'h2';
  const text = block.textContent.trim();
  const heading = document.createElement(level);
  heading.textContent = text;
  block.replaceWith(heading);
}
