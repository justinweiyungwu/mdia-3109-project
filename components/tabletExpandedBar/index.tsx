import styles from "../../components/tabletExpandedBar/TabletExpandedBar.module.css"
import Image from "next/image"

import genres from "../../public/images/Folder.svg"
import music from "../../public/images/music.svg"
import home from "../../public/images/Home.svg"
import calender from "../../public/images/Flame.svg"
import map from "../../public/images/World.svg"
import Logo from "../../public/images/Logo.png"
import dropDownMenuIcon from "../../public/images/burger.svg"

import { useState } from "react"
import { useRouter } from "next/router"

export default function TabletExpandedBar() {
    const[isClick, setIsClick] = useState(false)
    const toggleNavBar = (): void => {
        setIsClick(!isClick)
    }

  

    return(
        <>
        <div className={styles.main}>
            <div className={styles.expanded_bar}>
        <a className={styles.bottomBarItem} onClick={toggleNavBar}> <Image src={dropDownMenuIcon} alt="" height={40} width={40}/>
        { isClick ? 
            <div>x</div> 
            : null
        }
        </a> 
        {isClick && (   
        
       
          
     <div className={styles.navbar}>
        <Image className={styles.logo} src={Logo} alt="" height={87} width={80}/>
        <a className={styles.items} href="/"><Image src={home} alt="" height={30} width={30}/>Home</a>
        <a className={styles.items}href="/genres"><Image src={genres} alt="" height={30} width={30}/>Genres</a>
        <a className={styles.items} href="/artists"><Image src={music} alt="" height={30} width={30}/>Artists</a>
        <a className={styles.items} href="/map"><Image src={map} alt="Map" height={30} width={30}/>Map</a>
       <a  className={styles.items}href="/events"><Image src={calender} alt="" height={30} width={30}/>Events</a>

       </div>
       )} 
        </div>
      
        </div>
        </>
    )
}