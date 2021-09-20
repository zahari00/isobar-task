import "../styles/global.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="container">
      <Component {...pageProps} />
    </main>
  );
}
export default App;
