import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PageProvider } from "@/context/pageContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}
