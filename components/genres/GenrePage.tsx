import React from "react";
import TopBar from "../topBar";
import BottomBar from "../bottomBar";
import GenresCard from "../genres/index";
import styles from "./GenrePage.module.css";

interface Album {
  songName: string;
  singer: string;
  link: string;
  image: string;
}

interface Genre {
  genreName: string;
  albums: Album[];
}

const GenrePage: React.FC = () => {
  const genresData: Genre[] = [
    {
      genreName: "Rock",
      albums: [
        {
          songName: "Song 1",
          singer: "Artist 1",
          link: "#",
          image: "/path/to/album1.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <TopBar />
      <main className={styles.body}>
        {genresData.map((genre) => (
          <div key={genre.genreName} className={styles.genreSection}>
            <h1 className={styles.genreTitle}>{genre.genreName}</h1>
            <div className={styles.albumsContainer}>
              {genre.albums.map((album, index) => (
                <GenresCard key={index} {...album} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <BottomBar />
    </>
  );
};

export default GenrePage;
