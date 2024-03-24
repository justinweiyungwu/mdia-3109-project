import dynamic from "next/dynamic"
import TopBar from "../../components/topBar"
import BottomBar from "../../components/bottomBar"
import DesktopHeader from "../../components/headerDesktop";
const DynamicMap = dynamic(() => import('../../components/Map/'), {ssr: false});


export default function Map(){
    return(
      <>
          <DesktopHeader/>
      <TopBar></TopBar>
      <main>
     <br></br>
        <h2>Top Artists and Genres around the World</h2>
      <DynamicMap/>
      <h5>Q: What's the purpose of this map?</h5>
      <p>Our mobile application's interactive map utilizes extensive data from music platforms to highlight the most popular artists 
        and genres in different countries. Through dynamic pop-up displays, users can effortlessly explore and discover trending music trends across the globe.</p>
      </main>
     
      <BottomBar/>
      </>
    )
}