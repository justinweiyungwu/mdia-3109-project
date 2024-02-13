import Image from "next/image"
import styles from "../../components/bottomBar/BottomBar.module.css"


import home from "../../public/images/Home.svg"
import genres from "../../public/images/Folder.svg"
import music from "../../public/images/music.svg"


export default function BottomBar(){
    return(
        <>
        <div className={styles.mainnav}>
            <div className={styles.bottomBarBody}>

                <a className={styles.bottomBarItem} href="/genes"><Image src={genres} alt="" height={40} width={40}/>Genres</a>
                <a className={styles.bottomBarItem} href="/"><Image src={home} alt="" height={40} width={40}/>Home</a>
                <a className={styles.bottomBarItem} href="/artists"><Image src={music} alt="" height={40} width={40}/>Artists</a>
                
            </div> 
            </div> 
        </>
    )
}