import Image from "next/image"
import styles from "../../components/headerDesktop/Header.module.css"
import { useState } from "react"
import { useRouter } from "next/router"


import logo from "../../public/images/Logo.png"


export default function DesktopHeader() {
    return (
        <>
    <header className={styles.desktopHeader}>
 
        <ul className={styles.header}>
        <Image src={logo} alt="" height={175} width={175}/>
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