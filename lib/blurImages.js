import sharp from 'sharp';
import { existsSync, readFileSync, writeFileSync } from 'fs';

export const getBlurredImage = async (src) => {
  const path = 'public/blur-database.json';

  let blurCache = null;
  let data;

  if (existsSync(path)) {
    data = readFileSync(path);
  } else {
    console.log("doesn't exists");
    data = JSON.stringify({});
    writeFileSync(path, data);
  }

  blurCache = JSON.parse(data);

  if (src in blurCache) {
    console.log('returned cache', src);
    return blurCache[src];
  }

  const res = await fetch(src);
  console.log('fetch', src);
  const buffer = await res.arrayBuffer();
  return new Promise((resolve, reject) => {
    sharp(new Uint8Array(buffer))
      .ensureAlpha()
      .resize(960, null, { fit: 'inside' })
      .blur(100)
      // .jpeg({ mozjpeg: true, quality: 60, progressive: true })
      .webp({ quality: 60 })
      .toBuffer((err, buffer, { width, height }) => {
        err && reject(err);
        const base64Img = buffer.toString('base64');
        const blurObj = {
          imgData: `data:image/webp;base64,${base64Img}`,
          width,
          height,
        };
        blurCache[src] = blurObj;
        writeFileSync(path, JSON.stringify(blurCache));
        resolve(blurObj);
      });
  });
};
