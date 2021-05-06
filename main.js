import { createImage, getImageInBase64, createFacebox, cleanFaceDetector } from "./utils/index.js";

const iptEl = document.querySelector('#ipt-file');

iptEl.addEventListener('change', async () => {
  
  cleanFaceDetector();

  const imgSource = await getImageInBase64(iptEl.files[0]);
  const imgEl = await createImage(imgSource);
  const scale = imgEl.width / imgEl.naturalWidth;

  const faceDetector = new FaceDetector();
  const faceDetectorData = await faceDetector.detect(imgEl);

  faceDetectorData.forEach(({ boundingBox }) => {
    const { width, height, top, left } = boundingBox;
    createFacebox(width, height, top, left, scale);
  });
});