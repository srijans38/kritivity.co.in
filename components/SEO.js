import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({ title, description, image, type }) {
  const router = useRouter();

  return (
    <Head>
      <title>{title} | Kritivity</title>
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta
        name="og:url"
        content={`https://test.kritivity.co.in${router.pathname}`}
      />
      <meta name="og:image" content={image} />
      <meta name="og:type" content={type} />
    </Head>
  );
}
