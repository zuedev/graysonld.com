import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grayson Hermelin - Lighting Designer</title>
        <meta
          name="description"
          content="My name is Grayson Hermelin and I am a Lighting Designer currently based in Columbia, SC."
        />
        <link rel="icon" type="image/svg+xml" href="/GH.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
