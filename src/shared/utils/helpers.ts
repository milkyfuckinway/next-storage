export function convertStringToUrl(string: string) {
  return `url(${string})`;
}

export function calculateDocumentHeight() {
  function calcDvh() {
    document.documentElement.style.setProperty('--dvh', `${window.innerHeight}px`);
  }

  document.body.style.minHeight = 'var(--dvh)';

  calcDvh();

  window.addEventListener('resize', calcDvh);
}
