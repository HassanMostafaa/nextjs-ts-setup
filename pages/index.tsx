import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../shared/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>All About Next</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>All About Next</h1>
      </main>
    </div>
  );
};

export default Home;
