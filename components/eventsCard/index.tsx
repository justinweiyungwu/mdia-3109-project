import Image from "next/image"
import styles from "../eventsCard/EventCard.module.css"
import { useState, useEffect } from "react";


export default function EventCard(){

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


    return(
        <>
            <main className={styles.body}>
            
            {
                  data && data.chart.entries.map((item, index)=> {
                    return(
                      <>
                        {item.title}
                        {item.artist}
                        
                      </>
                    )
                  }
            )}
    

            </main>
        </>
    )
}