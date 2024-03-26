// import Image from "next/image"
// import styles from "../eventsCard/EventCard.module.css"
// import { useState, useEffect } from "react";


// export default function EventCard(){

//   const [data, setData] = useState<BillboardData | null>(null)

//   const apiKey = '';
//   const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08';


//   useEffect(() => {

//       const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': apiKey ?? ``,
//             'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
//           }
//         };

//         fetch(url, options)
//           .then(response => response.json())
//           .then(response => {
//               console.log(response);
//               setData(response);
//           })
//           .catch(error => {
//               console.log(error)
//           })

//   },[])


//     return(
//         <>
//             <main className={styles.body}>
            
//             {
//                   data && data.chart.entries.map((item, index)=> {
//                     return(
//                       <>
//                         {item.title}
//                         {item.artist}
                        
//                       </>
//                     )
//                   }
//             )}
    

//             </main>
//         </>
//     )
// }


import Image from "next/image"
import styles from "../eventsCard/EventCard.module.css"
import { useState, useEffect } from "react";
import events from "../../public/data/events.json"
import Link from "next/link";


export default function EventCard(){

  return(
    <div className={styles.eventsBody}>
      <h1>Events</h1>
<div className={styles.mainContainer}>
      <div className={styles.searchOptions}>
        <input className={styles.input1} placeholder="location"/>
        <input className={styles.input1} placeholder="artist name"/>
        <input className={styles.input2} placeholder="genres"/>
        <input className={styles.input2} placeholder="date"/>
        <button className={styles.button}>Go!</button>
      </div>

      <hr />

      <div className={styles.events}>
        {events.map(events => (
          <div className={styles.eventsSection} key={events.id}>
            <div>
             <p>{events.date}</p>
            </div>
              <div>
                <Image 
                  src={events.image}
                  alt=""
                  width={360}
                  height={265}/>
              </div>
   
              <div className={styles.eventsSectionTexts}>

                <p className={styles.eventsTitle}>{events.title}</p>
      
                <p className={styles.eventsLocation}>{events.location}</p>
                {/* <p className={styles.eventsLocation}>{events.address}</p> */}
                <p className={styles.eventContents}>{events.contents}</p>
                <Link href="">
                  <button className={styles.eventsSectionButton}>Learn More</button>
                </Link>
              </div>
             <hr/>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}