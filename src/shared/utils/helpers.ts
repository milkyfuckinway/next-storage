export function convertStringToUrl(string: string) {
  return `url(${string})`;
}

export function calculateDocumentHeight() {
  function calcDvh() {
    document.documentElement.style.setProperty('--dvh', `${window.innerHeight}px`);
  }

  calcDvh();
  window.addEventListener('resize', calcDvh);
}
