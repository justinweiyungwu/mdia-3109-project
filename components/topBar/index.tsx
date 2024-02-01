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

    const [sideMenuShow,  setSideMenuShow] = useState(false);
    const sideBar = () => {
        setSideMenuShow(!sideMenuShow)
    }


    const pageTitle = () => {
        switch (useRouter().pathname) {
            case "/":
              return "Home"

                case "/genes":
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

                                  case "/articles":
                                    return "Articles"
                                      break;

                                      case "/saved":
                                        return "Saved"
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
                    onClick={sideBar}
                />



            {sideMenuShow && (
                
                <div className={styles.slides}>
                    <ul className={styles.itemsSection}>
                            <li className={styles.items}><Image src={home} alt="" height={30} width={30}/><a href="/">Home</a></li>
                            <li className={styles.items}><Image src={genres} alt="" height={30} width={30}/><a href="/genes">Genres</a></li>
                            <li className={styles.items}><Image src={music} alt="" height={30} width={30}/><a href="/artists">Artists</a></li>
                            <li className={styles.items}><Image src={map} alt="" height={30} width={30}/><a href="/map">Map</a></li>
                            <li className={styles.items}><Image src={calender} alt="" height={30} width={30}/><a href="/events">Events</a></li>
                            <li className={styles.items}><Image src={articles} alt="" height={30} width={30}/><a href="/artists">Articles</a></li>
                            <li className={styles.items}><Image src={saved} alt="" height={30} width={30}/><a href="/saved">Saved</a></li>
                    </ul>
                </div>

            )}

            </main> 
        </>
    )
}