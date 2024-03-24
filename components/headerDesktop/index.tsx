import Image from "next/image"
import styles from "../../components/headerDesktop/Header.module.css"
import { useState } from "react"
import { useRouter } from "next/router"


import home from "../../public/images/Home.svg"
import genres from "../../public/images/Folder.svg"
import music from "../../public/images/music.svg"
import map from "../../public/images/World.svg"
import calender from "../../public/images/Flame.svg"

export default function DesktopHeader() {
    return (
        <>
    <header className={styles.desktopHeader}>
        <ul className={styles.header}>
          <li><a className={styles.items} href="/">Home</a></li>
          <li><a className={styles.items}href="/genres">Genres</a></li>
          <li><a className={styles.items}href="/artists">Artists</a></li>
          <li><a className={styles.items}href="/map">Map</a></li>
          <li><a className={styles.items}href="/events">Events</a></li>
        </ul>
    </header>




        </>
    )
}