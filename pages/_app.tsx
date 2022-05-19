import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../layouts";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
