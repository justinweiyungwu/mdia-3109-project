
import BottomBar from "../../components/bottomBar"
import TopBar from "../../components/topBar"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EventCard from "../../components/eventsCard";


export default function Home() {

  const [data, setData] = useState<BillboardData | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08';


  useEffect(() => {

      const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey ?? ``,
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
          }
        };

        fetch(url, options)
          .then(response => response.json())
          .then(response => {
              console.log(response);
              setData(response);
          })
          .catch(error => {
              console.log(error)
          })

  },[])


  return (
    <>
    <TopBar/>
    <main>
    {data && (
          <div>
            <h1>Chart for Week: {data.week}</h1>

            <h2>Chart Entries</h2>
        
          </div>
        )}
    
    <EventCard />

    </main>
    <BottomBar/>
    
    </>
  )
}
