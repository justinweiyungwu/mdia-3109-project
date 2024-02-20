import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import GenresCard from "../../components/genres";

export default function Artists() {
  return (
    <>
      <TopBar></TopBar>
      <main>
     <GenresCard/>
      </main>
      <BottomBar />
    </>
  );
}
