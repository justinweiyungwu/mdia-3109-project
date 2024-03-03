
import BottomBar from "../../components/bottomBar"
import TopBar from "../../components/topBar"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EventCard from "../../components/eventsCard";


export default function Home() {
 

  return (
    <>
    <TopBar/>
    <main>
    
    <EventCard />

    </main>
    <BottomBar/>
    
    </>
  )
}
