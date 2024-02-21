import TopBar from "../topBar";
import BottomBar from "../bottomBar";
import Image from "next/image";
import styles from "../genres/GenresCard.module.css";
import songs from  '../../public/data/songs.json';

export default function GenresCard() {
  return (
    <>
     <main>
     <h3>Picked for you</h3>
     <div className={styles.song_container}>
     {songs.map(songs => (
                <div className={styles.topSongs_container} key={songs.id}>

                 
                    <div className={styles.top_song_container}>
                    <a>
                    <Image 
                     className={styles.top_song_container_img}   
                        src={songs.songsImage}
                        alt=""
                        width={150}
                        height={150}/>
                    <h5 className={styles.subtitle}>{songs.songsTitle}</h5>
                    </a>
                    </div>
                    </div>
                
                ))}
                </div>
     </main>
    </>
  );
}
