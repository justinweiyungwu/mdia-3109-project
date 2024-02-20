import Image from "next/image"
import styles from "../eventsCard/EventCard.module.css"
import { useState, useEffect } from "react";
export default function EventCard(){
    const [data, setData] = useState<BillboardData[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08';


  useEffect(() => {

    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey ?? ``,
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return(
        <>
            <main className={styles.body}>
            
            {
        data.map((entry, index) => {
          return(
            <div key={index}>
           
            </div>
          )
        })
      }
    

            </main>
        </>
    )
}