import TopBar from "../topBar";
import BottomBar from "../bottomBar";
import Image from "next/image";
import styles from "../genres/GenresCard.module.css";
import songs from  '../../public/data/songs.json';
import pop from  '../../public/data/pop.json';
import kpop from  '../../public/data/kpop.json';

export default function GenresCard() {
  return (
    <>
     <main>
     <h3>Popular Music in Canada</h3>
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
                <h3>Pop</h3>
                <div className={styles.song_container}>
     {pop.map(pop => (
                <div className={styles.topSongs_container} key={pop.id}>

                 
                    <div className={styles.top_song_container}>
                    <a>
                    <Image 
                     className={styles.top_song_container_img}   
                        src={pop.songsImage}
                        alt=""
                        width={350}
                        height={150}/>
                    <h5 className={styles.subtitle}>{pop.songsTitle}</h5>
                    <h6 className={styles.artist}>{pop.musicTitle}</h6>
                    </a>
                    </div>
                    </div>
                
                ))}
                </div>
                <h3>Kpop</h3>
                <div className={styles.song_container}>
     {kpop.map(kpop => (
                <div className={styles.topSongs_container} key={kpop.id}>

                 
                    <div className={styles.top_song_container}>
                    <a>
                    <Image 
                     className={styles.top_song_container_img}   
                        src={kpop.songsImage}
                        alt=""
                        width={350}
                        height={150}/>
                    <h5 className={styles.subtitle}>{kpop.songsTitle}</h5>
                    <h6 className={styles.artist}>{kpop.musicTitle}</h6>
                    </a>
                    </div>
                    </div>
                
                ))}
                </div>
     </main>
    </>
  );
}
