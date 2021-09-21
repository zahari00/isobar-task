import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "../styles/global.css";
import fetch from "isomorphic-unfetch";

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnReconnect: false,
        // revalidateOnMount: false,
        fallback: pageProps.fallback,
        errorRetryCount: 1,
        shouldRetryOnError: true,
        fetcher: (args) => fetch(args).then((res) => res.json()),
      }}
    >
      <main className="container">
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  );
}

export default App;
