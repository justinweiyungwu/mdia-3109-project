import Image from "next/image"
import styles from "../../components/topBar/TopBar.module.css"
import { useState } from "react"
import { useRouter } from "next/router"

import searchIcon from "../../public/images/search.svg"
import dropDownMenuIcon from "../../public/images/burger.svg"

import home from "../../public/images/Home.svg"
import genres from "../../public/images/Folder.svg"
import music from "../../public/images/music.svg"
import map from "../../public/images/World.svg"
import calender from "../../public/images/Flame.svg"
import articles from "../../public/images/Pen.svg"
import saved from "../../public/images/Heart.svg"


export default function TopBar(){

  const [menuOpen, setMenuOpen] = useState(false);

    const pageTitle = () => {
        switch (useRouter().pathname) {
            case "/":
              return "Home"

                case "/genres":
                    return "Genres"
                      break;

                      case "/artists":
                        return "Artists"
                          break;

                          case "/map":
                            return "Map"
                              break;

                              case "/events":
                                return "Events"
                                  break;

                                            default: ""
                                                break;
        }
    }

    return(
        <>
            <main className={styles.topBarBody}>
                <Image 
                    src={searchIcon}
                    alt=""
                    width={30}
                    height={30}
                />
                
                <h1>{pageTitle()}</h1>
                    
                <Image 
                    src={dropDownMenuIcon}
                    alt = ""
                    height={30}
                    width={40}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                />



            {
            menuOpen && (
              
                <div className={styles.slides}>

                    <ul className={styles.open__menu}>
                    <div onClick={() => {
              setMenuOpen(!menuOpen);
            }} className={styles.menu__close}>
              <i>X</i>
            </div>
                            <li><a className={styles.items} href="/"><Image src={home} alt="" height={30} width={30}/>Home</a></li>
                            <li><a className={styles.items}href="/genres"><Image src={genres} alt="" height={30} width={30}/>Genres</a></li>
                            <li><a className={styles.items} href="/artists"><Image src={music} alt="" height={30} width={30}/>Artists</a></li>
                            <li><a className={styles.items} href="/map"><Image src={map} alt="" height={30} width={30}/>Map</a></li>
                            <li><a  className={styles.items}href="/events"><Image src={calender} alt="" height={30} width={30}/>Events</a></li>
                    </ul>
                </div>
             
            )}

            </main> 
        </>
    )
}