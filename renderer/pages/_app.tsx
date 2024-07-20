import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { back } = useRouter();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
