
import Image from "next/image"
import styles from "../artistsCard/ArtistsCard.module.css"
import data from '../../public/data/data.json';
import songs from  '../../public/data/songs.json';

export default function ArtistsCard(){
    return(
        <>
            <main className={styles.main}>
            {data.map(artist => (
            <div className={styles.artists_Section} key={artist.id}>
        <div className={styles.artistDetail_Section}>
                <Image 
                    className={styles.artist_Image}
                    src={artist.artistImage}
                    alt="taylay"
                    width={200}
                    height={200}/>
   
                    <h1 className={styles.title}>{artist.artistName}</h1>
                    <h4 className={styles.subtitle}>{artist.genre}</h4>
                    <p>{artist.artistDetails}</p>
                </div>
                <h3 className={styles.subtitle}>Top Songs</h3>
                <div className={styles.grid_container}>
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
                    </a>
                    </div>
                    </div>
                
                ))}
                    </div>
               
           </div>
          ))}

            </main>
        </>
    )
}