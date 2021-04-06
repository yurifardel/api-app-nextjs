import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function PostItem() {
  const router = useRouter();
  const { id } = router.query;
  const { conteudo } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          POST ACESSADO: {conteudo} e {id}
        </h1>
      </main>
    </div>
  );
}
