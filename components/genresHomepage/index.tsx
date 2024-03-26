import TopBar from "../topBar";
import BottomBar from "../bottomBar";
import Image from "next/image";
import styles from "../genres/GenresCard.module.css";
import songs from  '../../public/data/home.json';

export default function GenresHomepageCard() {
  return (
    <>
     <main>
     <h3>New Tracks</h3>
     <div className={styles.song_container}>
     {songs.map(songs => (
                <div className={styles.topSongs_container} key={songs.id}>

                 
                    <div className={styles.top_song_container}>
                    <a>
                    <Image 
                     className={styles.top_song_container_img}   
                        src={songs.songsImage}
                        alt=""
                        width={350}
                        height={150}/>
                    <h5 className={styles.subtitle}>{songs.songsTitle}</h5>
                    <h6 className={styles.artist}>{songs.musicTitle}</h6>
                    </a>
                    </div>
                    </div>
                
                ))}
                </div>
            
     </main>
    </>
  );
}
