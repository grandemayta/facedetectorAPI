export function cleanFaceDetector() {
  const imgEl = document.querySelector('img');
  const divEls = document.querySelectorAll('div');

  if (imgEl !== null) {
    imgEl.remove();
  }

  if (divEls.length > 0) {
    divEls.forEach(divEl => divEl.remove());
  }
}