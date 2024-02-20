
import BottomBar from "../../components/bottomBar"
import TopBar from "../../components/topBar"
import React, { useEffect, useState } from "react";
import Image from "next/image";


export default function Home() {

  const [data, setData] = useState<BillboardData[]>([]);

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
<<<<<<< HEAD
  

=======
      {
        data.map((d, index) => {
          return(
            <div key={index}>
              <h1>{d.rank}</h1>
              <h2>{d.title}</h2>
              <h3>{d.artist}</h3>
            </div>
          )
        })
      }
    
>>>>>>> Takamii
    </main>
    <BottomBar/>
    
    </>
  )
}
