import type { AppProps } from "next/app";
import { Footer, Navigation } from "@components";
import "../styles/global.css";
import { DataProvider } from "@context";

function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider initialData={pageProps.data}>
      <Navigation />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </DataProvider>
  );
}

export default App;
