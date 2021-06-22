import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({ title, description, image, type }) {
  const router = useRouter();

  return (
    <Head>
      <title>{title} | Kritivity</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://test.kritivity.co.in${router.asPath}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
    </Head>
  );
}
