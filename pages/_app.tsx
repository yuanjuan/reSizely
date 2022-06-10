import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import NextNProgress from "nextjs-progressbar";
import { SWRConfig } from "swr";
import request from "../lib/request";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress />
      <SWRConfig
        value={{
          fetcher: (...args) => request(...args),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
