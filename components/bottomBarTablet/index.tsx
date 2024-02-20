import Image from "next/image"
import styles from "../../components/bottomBarTablet/TabletBottomBat.module.css"

import genres from "../../public/images/Folder.svg"
import music from "../../public/images/music.svg"
import home from "../../public/images/Home.svg"
import calender from "../../public/images/Flame.svg"
import map from "../../public/images/World.svg"


export default function BottomBarTablet () {
    return(
        <>
        <div className={styles.main}>
            <div className={styles.tabletBottomBar}>
            <a className={styles.bottomBarItem} href="/genres"> <Image src={genres} alt="" height={40} width={40}/>Genres</a>
            <a className={styles.bottomBarItem} href="/artists"><Image src={music} alt="" height={40} width={40}/>Artists</a>
            <a className={styles.bottomBarItem} href="/"><Image src={home} alt="" height={40} width={40}/>Home</a>
            <a  className={styles.bottomBarItem}href="/events"><Image src={calender} alt="" height={40} width={40}/>Events</a>
            <a className={styles.bottomBarItem} href="/map"><Image src={map} alt="" height={40} width={40}/>Map</a>
            


            </div>
        </div>
        </>
    )
}