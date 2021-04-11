import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//server side render

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FILMES</h1>
        <Link href="/buscar">Buscar filme</Link>
        <ul>
          {list.map((item) => {
            return (
              <li>
                <a href={`https://www.themoviedb.org/movie/${item.id}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
                    width="150"
                  />
                  <br />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/trending");
  const json = await response.json();

  return {
    props: {
      list: json.list,
    },
  };
}
