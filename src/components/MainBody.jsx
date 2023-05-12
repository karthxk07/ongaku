import "./MainBody.css";
import { BannerFlash } from "./mainbody/BannerFlash";
import { HeaderBar } from "./mainbody/HeaderBar";
export const MainBody = () => {
  return (
    <div className="mainBody flex-1 flex-col">
      <HeaderBar />
      <BannerFlash />
    </div>
  );
};
