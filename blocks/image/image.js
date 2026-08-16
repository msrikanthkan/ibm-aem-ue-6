/**
 * Image block — Migrated from AEM: wknd/components/image
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [imageCell, captionCell] = [...row.children];
    if (!imageCell) return;

    const img = imageCell.querySelector('img');
    if (img) { img.loading = 'lazy'; img.decoding = 'async'; }

    if (captionCell && captionCell.textContent.trim()) {
      const figure = document.createElement('figure');
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = captionCell.textContent.trim();
      if (img) figure.appendChild(img.closest('picture') || img);
      figure.appendChild(figcaption);
      row.replaceWith(figure);
    }
  });
}
