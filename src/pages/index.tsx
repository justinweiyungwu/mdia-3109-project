
import BottomBar from "../../components/bottomBar"
import TopBar from "../../components/topBar"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DesktopHeader from "../../components/headerDesktop";

import styles from "..styles/Home.module.css";


export default function Home() {
 

  return (
    <>
    <DesktopHeader/>
    <TopBar/>
    
    <main className="main_container">
   
    

    <BottomBar/>

    </main>
   
    </>
    
  )
}
