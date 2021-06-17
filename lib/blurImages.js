import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';

export const getBlurredImage = async (src, fileName) => {
  const path = `${process.cwd()}/${fileName.slice(0, -4)}.json`;

  let blurCache = null;
  let data;

  try {
    data = await readFile(path);
    console.log('exists');
  } catch {
    console.log("doesn't exist");
    data = JSON.stringify({});
    await writeFile(path, data);
  }

  blurCache = JSON.parse(data);

  if (Object.keys(blurCache).includes(src)) {
    console.log('returned cache', src);
    return blurCache[src];
  } else {
    const res = await fetch(src);

    console.log('fetch', src);

    const buffer = await res.arrayBuffer();
    const convertedImg = await sharp(new Uint8Array(buffer))
      .ensureAlpha()
      .resize(960, null, { fit: 'inside' })
      .blur(100)
      .webp({ quality: 60 })
      .toBuffer({
        resolveWithObject: true,
      });

    const base64Img = convertedImg.data.toString('base64');

    const blurObj = {
      imgData: `data:image/webp;base64,${base64Img}`,
      width: convertedImg.info.width,
      height: convertedImg.info.height,
    };

    blurCache[src] = blurObj;
    await writeFile(path, JSON.stringify(blurCache));
    console.log('write', src);
    return blurObj;
  }
};
