import { PlaylistCard } from "../PlaylistCard";
import { trendingList } from "../../data/trending";
export const DiscoverContainer = () => {
  return (
    <div className="w-full flex min-h-screen h-fit">
      <div className="flex-col w-1/3 ">
        {trendingList.map((item) => {
          console.log(item.imgUrl);
          return PlaylistCard(item);
        })}
      </div>
      <div className="flex-col w-1/3"></div>
      <div className="flex-col w-1/3"></div>
    </div>
  );
};
