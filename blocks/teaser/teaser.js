/**
 * Teaser block — Migrated from AEM: wknd/components/teaser
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  const [imageRow, pretitleRow, headingRow, bodyRow, ctaRow] = rows;

  const wrapper = document.createElement('div');
  wrapper.className = 'teaser-inner';

  if (imageRow) {
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'teaser-image';
    imgWrapper.append(...imageRow.firstElementChild.childNodes);
    wrapper.appendChild(imgWrapper);
  }

  const content = document.createElement('div');
  content.className = 'teaser-content';

  if (pretitleRow && pretitleRow.textContent.trim()) {
    const pretitle = document.createElement('p');
    pretitle.className = 'teaser-pretitle';
    pretitle.textContent = pretitleRow.textContent.trim();
    content.appendChild(pretitle);
  }

  if (headingRow) {
    const heading = document.createElement('h2');
    heading.textContent = headingRow.textContent.trim();
    content.appendChild(heading);
  }

  if (bodyRow) {
    const body = document.createElement('p');
    body.innerHTML = bodyRow.firstElementChild.innerHTML;
    content.appendChild(body);
  }

  if (ctaRow) {
    const link = ctaRow.querySelector('a');
    if (link) {
      link.className = 'teaser-cta button';
      content.appendChild(link);
    }
  }

  wrapper.appendChild(content);
  block.textContent = '';
  block.appendChild(wrapper);
}
