import styles from "../../components/topBarTablet/TopBarTablet.module.css"
import Image from "next/image"

import searchIcon from "../../public/images/search.svg"
import dropDownMenuIcon from "../../public/images/burger.svg"

// import genres from "../../public/images/Folder.svg"
// import music from "../../public/images/music.svg"
// import home from "../../public/images/Home.svg"
// import calender from "../../public/images/Flame.svg"
// import map from "../../public/images/World.svg"
// import Logo from "../../public/images/Logo.png"

import TabletExpandedBar from "../tabletExpandedBar"


import { useState } from "react"
import { useRouter } from "next/router"
export default function TopBarTablet() {
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
        <div className={styles.main}>

        <div className={styles.toptabletbar}>
        <a className={styles.bottomBarItem}> <Image src={searchIcon} alt="" height={40} width={40}/></a>
        <h1>{pageTitle()}</h1>
        <TabletExpandedBar />
        {/* <a className={styles.bottomBarItem}> <Image src={dropDownMenuIcon} alt="" height={40} width={40}/></a> */}
        

        </div>
        
 
        </div>
        </>
    )

}
