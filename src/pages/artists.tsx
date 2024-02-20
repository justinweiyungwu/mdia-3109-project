import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import ArtistsCard from "../../components/artistsCard";

export default function Artists(){
    return(
        <>
        <TopBar></TopBar>
        <main>
      
        <ArtistsCard />
        </main>
        <BottomBar/>
        </>
    )
}