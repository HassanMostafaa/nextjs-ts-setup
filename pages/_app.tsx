// import "../shared/globals.css";
import type { AppProps } from "next/app";
import { globalStyles } from "../shared/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
