import Image from "next/image"
import styles from "../artistsCardTablet/ArtistsCardTablet.module.css"

export default function ArtistCardTablet({   artistImage="",
artistName = "Taylor Swift",
artistDetails = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
musicVideoLink = "",
topSongLink = "",
songsImage="",
songsTitle="Cruel Summer",
musicImage="",
musicTitle = "Blank Space",}) {
    return(
        <>
        <div className={styles.main}>

        <Image 
            className={styles.artistImage}
            src={artistImage}
            alt=""
            width={180}
            height={180}/>
         <div className={styles.artistDetailSection}>
                    <h1 className={styles.artistName}>{artistName}</h1>
                    <p className={styles.artistDetails}>{artistDetails}</p>
                </div>
                <a href={topSongLink}>
                    <div className={styles.topSongsSection}>
                    <h2 className={styles.title}>Top Songs</h2>
                    <Image    
                        src={songsImage}
                        alt=""
                        width={150}
                        height={150}/>
                    <h3 className={styles.texts}>{songsTitle}</h3>
                    </div>
                </a>

                <a href={musicVideoLink}>
                    <div className={styles.musicVideoSection}>
                    <h2 className={styles.title}>Music Videos</h2>
                    <Image    
                        src={musicImage}
                        alt=""
                        width={150}
                        height={150}/>
                    <h3>{musicTitle}</h3>
                    </div>
                </a>    
        </div>
        </>
    )
}