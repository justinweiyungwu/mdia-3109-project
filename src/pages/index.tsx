
import BottomBar from "../../components/bottomBar"
import TopBar from "../../components/topBar"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DesktopHeader from "../../components/headerDesktop";
import Link from 'next/link';


import styles from "..styles/Home.module.css";
import GenresCard from "../../components/genres";
import ArticleCard from "../../components/articleCard";
import EventCard from "../../components/eventsCard";
import ArtistsCard from "../../components/artistsCard";
import GenresHomepageCard from "../../components/genresHomepage";


export default function Home() {
 

  return (
    <>
    <DesktopHeader/>
    <TopBar/>
    
    <main className="main_container">
      <ArticleCard/>
      <GenresHomepageCard/>
      
      <GenresCard/>



   
    

    <BottomBar/>

    </main>
   
    </>
    
  )
}
