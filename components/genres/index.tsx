import TopBar from "../topBar";
import BottomBar from "../bottomBar";
import Image from "next/image";
import styles from "../genres/GenresCard.module.css";

export default function GenresCard({
  songName = "I KNOW ?",
  singer = "Travis Scott",
  link = "",
  image = "",
}) {
  return (
    <>
      <main className={styles.body}>
        <a href={link} target="_blank">
          <Image
            className={styles.genresImage}
            src={image}
            alt=""
            width={175}
            height={175}
          />

          <div className={styles.genresDetails}>
            <h1 className={styles.songName}>{songName}</h1>
            <h2 className={styles.singer}>{singer}</h2>
          </div>
        </a>
      </main>
    </>
  );
}
