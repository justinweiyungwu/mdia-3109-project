import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import BottomBarTablet from "../../components/bottomBarTablet";
import TopBarTablet from "../../components/topBarTablet";
import ArticleCardTablet from "../../components/artucleCardTablet";
import cypress from "cypress";

export default function Artists(){
    return(
        <>
        <TopBar data-testid="cypress-topbar"></TopBar>
        <main>
      <ArticleCardTablet/>
    
        </main>
        <TopBarTablet/>
        <BottomBarTablet/>
        <BottomBar data-testid="bottom-bar"/>
        </>
    )
}