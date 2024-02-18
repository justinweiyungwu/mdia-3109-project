import Image from "next/image"
import styles from "../eventsCard/EventCard.module.css"

export default function EventCard({
    dateMonth="",
    dateDay="",
    singer = "",
    link = "",
    place="",
    address="",
    description="",
    image = "",
}){
    return(
        <>
            <main className={styles.body}>
              <div className={styles.dates}>
                <p className={styles.month}>{dateMonth}</p>
                <p className={styles.day}>{dateDay}</p>
              </div>
               <div className={styles.contents}>
                    <Image 
                        className={styles.eventImage}
                        src={image}
                        alt=""
                        width={360}
                        height={265}/>

                    <div className={styles.eventDetails}>
                        <h1 className={styles.singer}>{singer}</h1>
                        <h2 className={styles.placeAddress}>{place} <br />{address}</h2>
                        <p className={styles.description}>{description}</p>
                        <a href={link} target="_blank">
                            <button  className={styles.viewButton}>View More</button>
                        </a>
                    </div>
                </div>

            </main>
        </>
    )
}