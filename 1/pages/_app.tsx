// pages/_app.tsx
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/Pagetransition";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={router.pathname}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
