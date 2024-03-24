import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import GenresCard from "../../components/genres";
import DesktopHeader from "../../components/headerDesktop";

export default function Artists() {
  return (
    <>
        <DesktopHeader/>
      <TopBar></TopBar>
      <main>
     <GenresCard/>
      </main>
      <BottomBar />
    </>
  );
}
