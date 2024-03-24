import TopBar from "../../components/topBar"
import BottomBar from "../../components/bottomBar"
import EventCard from "../../components/eventsCard";
import DesktopHeader from "../../components/headerDesktop";

export default function Events(){



    return(
        <>
             <DesktopHeader/>   
    <TopBar />
    <main>
  <EventCard/>

    </main>
    <BottomBar/>
        </>
    )
}