import { BannerFlash } from "./mainbody/BannerFlash";
import { HeaderBar } from "./mainbody/HeaderBar";
import { HomeContainer } from "./mainbody/HomeContainer.jsx";

const MainBody = () => {
  return (
    <div className="mainBody flex-1 flex-col">
      <HeaderBar />
      <BannerFlash />
      <HomeContainer />
    </div>
  );
};

export default MainBody;
