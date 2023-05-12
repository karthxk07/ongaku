import "./SideBar.css";
import { Branding } from "./sidebarComponents/Branding";
import { Menu } from "./sidebarComponents/Menu";
import { SearchBar } from "./sidebarComponents/SearchBar";
export const SideBar = () => {
  return (
    <div className="sidebarBody w-1/5 flex flex-col overflow-scroll scrollbar-hide">
      <SearchBar />
      <Menu />
      <Branding />
    </div>
  );
};
