export function createImage(imgSource) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.src = imgSource;
  
    imgEl.onload = () => resolve(imgEl);
    imgEl.onerror = error => reject(error);
  
    document.body.appendChild(imgEl);
  });
}
