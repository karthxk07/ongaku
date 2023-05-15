import { PlaylistCard } from "../PlaylistCard";

let trendingList = [];
export const DiscoverContainer = () => {
  return (
    <div className=" flex min-h-screen my-3 h-fit">
      <div className=" columns-4 gap-1 w-full ">
        {trendingList.map((item) => {
          console.log(item.imgUrl);
          return <PlaylistCard playlist={item} className="aspect-auto" />;
        })}
      </div>
    </div>
  );
};
