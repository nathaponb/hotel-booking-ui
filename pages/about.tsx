import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

function about(): JSX.Element {
  return (
    <>
      <Head>
        <title>About Nathapon</title>
        <meta name="description" content="about nathapon the dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <h2 className="text-lg">About</h2>
        </div>
      </motion.div>
    </>
  );
}

export default about;
