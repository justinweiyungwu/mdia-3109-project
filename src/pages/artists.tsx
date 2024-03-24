import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import ArtistsCard from "../../components/artistsCard";
import DesktopHeader from "../../components/headerDesktop";
export default function Artists(){
    return(
        <>
            <DesktopHeader/>
        <TopBar></TopBar>
        <main>
      
        <ArtistsCard />
        </main>
        <BottomBar/>
        </>
    )
}