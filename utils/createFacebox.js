export function createFacebox(width, height, top, left, scale) {
  const divEl = document.createElement('div');
  divEl.className = 'facebox';

  divEl.style.cssText = `
    width: ${width * scale}px;
    height: ${height * scale}px;
    top: ${top * scale}px;
    left: ${left * scale}px;
  `;

  document.body.appendChild(divEl);
}
  