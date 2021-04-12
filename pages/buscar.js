import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

//client side render
export default function Buscar() {
  const [searchText, setSeachText] = useState();
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if (searchText !== "") {
      const result = await fetch(
        `http://localhost:3000/api/search?q=${searchText}`
      );
      const json = await result.json();
      setMovieList(json.list);

      console.log(json);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buscar</h1>

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSeachText(e.target.value)}
        />
        <h1>Buscando por: {searchText}</h1>
        <button onClick={handleSearch}>BUSCAR</button>

        <hr />

        <ul>
          {movieList.map((item) => {
            return (
              <li>
                <a href={`/movie/${item.id}`}>
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
