import Image from "next/image"
import styles from "../../components/topBar/TopBar.module.css"
import Link from "next/link"

import genresIcon from "../../public/images/genresIcon.svg"
export default function BottomBar(){
    return(
        <>
            <main className={styles.topBarBody}>

                <Link href="/genres">
                    <Image 
                        className={styles.icon}
                        src={genresIcon}
                        alt=""
                        width={30}
                        height={30}
                    />
                    <p>Genres</p>
                </Link>
                
                {/* <h1>{pageName}</h1>
                    
                <Image 
                    src={dropDownMenuIcon}
                    alt = ""
                    height={30}
                    width={40} */}
                {/* /> */}
            </main>  
        </>
    )
}