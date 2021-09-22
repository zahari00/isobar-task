import type { AppProps } from "next/app";
import { Footer, Navigation } from "@components";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
