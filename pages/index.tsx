import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter, NextRouter } from "next/router";
import { CardOwner } from "../components";
import { motion } from "framer-motion";
import { parentMotion, childMotion } from "../utils/framerMotion";
import useLocale from "../utils/useLocale";

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const { locale } = router;

  /**
   * * Bind lang to choosing locale from Header component
   * * which toggle between available languages
   */
  const lang = useLocale(locale);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.container}`}>
        <Head>
          <title>Nathapon</title>
          <meta name="description" content="nathapon the dev" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={`${styles.main} min-h-screen h-screen `}>
          <div className="absolute inset-0 bg-fixed">
            <video
              className="h-full w-full absolute top-0 left-0 object-cover"
              autoPlay={true}
              loop
              muted
              src="videos/nature.mp4"
            />
            <div className="absolute inset-0 pointer-events-none bg-black opacity-20" />
          </div>

          <motion.div
            className="z-10"
            variants={parentMotion}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={childMotion}
              className="text-8xl dark:text-white text-white leading-tight font-poppins z-10"
            >
              {lang.welcome}
            </motion.h1>

            <motion.div
              variants={childMotion}
              className="text-2xl font-poppins z-10 text-white dark:text-white"
            >
              {lang.preText}
            </motion.div>
          </motion.div>
        </main>
        <CardOwner />
      </div>
    </motion.div>
  );
};

export default Home;
