import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Contributors block
 * Renders a responsive grid of circular contributor cards.
 *
 * Authoring row (UE model: "contributor"):
 *   col 0 — photo (picture / img)
 *   col 1 — name
 *   col 2 — occupation(s)
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);

    const [photoCell, nameCell, occCell] = row.children;

    // Photo wrapper
    const photoDiv = document.createElement('div');
    photoDiv.className = 'contributors-card-image';
    if (photoCell) {
      while (photoCell.firstElementChild) photoDiv.append(photoCell.firstElementChild);
    }

    // Name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'contributors-card-name';
    if (nameCell) nameDiv.textContent = nameCell.textContent.trim();

    // Occupation
    const occDiv = document.createElement('div');
    occDiv.className = 'contributors-card-occupation';
    if (occCell) occDiv.textContent = occCell.textContent.trim();

    li.append(photoDiv, nameDiv, occDiv);
    ul.append(li);
  });

  // Optimise images
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimized = createOptimizedPicture(img.src, img.alt, false, [{ width: '320' }]);
    moveInstrumentation(img, optimized.querySelector('img'));
    img.closest('picture').replaceWith(optimized);
  });

  block.replaceChildren(ul);
}
