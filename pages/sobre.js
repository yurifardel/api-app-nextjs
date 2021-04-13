import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//Static props

export default function MovieItem({ author }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Essa pagina foi feita durante um estudo sobre Next.js
        </h1>
        <hr />
        <p>autor: {author}</p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      author: "Yuri Fardel",
    },
  };
}
