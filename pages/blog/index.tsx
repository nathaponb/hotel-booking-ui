import React from "react";
import Head from "next/head";
import BlogItem from "../../components/BlogItem";
import { motion } from "framer-motion";
import { parentMotion, childMotion } from "../../utils/framerMotion";

function blog(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="px-8 mt-10 max-w-7xl m-auto">
        <Head>
          <title>Nathapon Blogs</title>
          <meta name="description" content="about nathapon the dev" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <motion.div
          variants={parentMotion}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8"
        >
          {Array.from({ length: 4 }, (v, i) => {
            return (
              <motion.div variants={childMotion}>
                <BlogItem key={i} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default blog;
