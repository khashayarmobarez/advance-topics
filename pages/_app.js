import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>back up header</title>
        <meta name='description'>title for pages that doesnt have their own head</meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
