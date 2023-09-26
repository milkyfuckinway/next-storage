export default function calculateDocumentHeight() {
  function calcDvh() {
    document.documentElement.style.setProperty('--dvh', `${window.innerHeight}px`);
  }

  calcDvh();
  window.addEventListener('resize', calcDvh);
}
