import React from 'react';
import Image from 'next/image';

export const getImageSerializer = () => {
  function shimmer(w, h) {
    return `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g" gradientTransform="rotate(10)">
        <stop stop-color="#c6a05d" offset="20%" />
        <stop stop-color="#ffcd77" offset="50%" />
        <stop stop-color="#c6a05d" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#c6a05d" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
  }

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (props) => {
    const {
      node: {
        asset: { _ref },
      },
      options: { projectId, dataset },
    } = props;

    const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${_ref
      .slice(6)
      .slice(0, -4)}.jpg`;

    return (
      <Image
        src={url}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(960, 640))}`}
        width="960"
        height="640"
        layout="responsive"
      ></Image>
    );
  };
};
