import type { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="container">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
