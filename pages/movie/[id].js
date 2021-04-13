import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

//server side render

export default function MovieItem({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FILMES: {info.title}</h1>

        <Link href="/buscar">Buscar filme</Link>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/movie/${context.params.id}`
  );
  const json = await response.json();
  console.log(json);

  return {
    props: {
      info: json.info,
    },
  };
}
