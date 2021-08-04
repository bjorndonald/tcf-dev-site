import React from "react";
import Head from "next/head";

export default function MetaTag({ title, description, canonicalURL }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />

      <title>{title}</title>
    </Head>
  );
}

MetaTag.defaultProps = {
  title: "Traders Central",
  description: "Starting investing your future now...",
  canonicalURL: "traderscentralfund.com",
};
