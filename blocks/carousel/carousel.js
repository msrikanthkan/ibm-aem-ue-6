/**
 * Carousel block — Migrated from AEM: wknd/components/carousel
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const slides = [...block.children];
  const track  = document.createElement('ul');
  track.className = 'carousel-track';
  track.setAttribute('role', 'list');

  slides.forEach((slide, i) => {
    const li = document.createElement('li');
    li.className = 'carousel-slide';
    li.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);
    li.append(...slide.childNodes);
    track.appendChild(li);
  });

  const prev = document.createElement('button');
  prev.className = 'carousel-prev';
  prev.setAttribute('aria-label', 'Previous slide');
  prev.innerHTML = '&#8249;';

  const next = document.createElement('button');
  next.className = 'carousel-next';
  next.setAttribute('aria-label', 'Next slide');
  next.innerHTML = '&#8250;';

  let current = 0;
  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    track.querySelectorAll('.carousel-slide').forEach((s, i) => {
      s.setAttribute('aria-hidden', i !== current);
    });
  }

  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  block.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  block.textContent = '';
  block.appendChild(prev);
  block.appendChild(track);
  block.appendChild(next);
  block.setAttribute('tabindex', '0');
  goTo(0);
}
