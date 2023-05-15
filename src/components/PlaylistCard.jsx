export const PlaylistCard = (props) => {
  let playlist = props.playlist;

  console.log(playlist);
  return (
    <div className="w-100 h-fit bg-white rounded-lg m-5 mt-0 overflow-hidden p-3">
      <img
        alt="Playlist1"
        src={playlist.imgUrl}
        className={`w-100 rounded-lg`}
      ></img>
      <p className="text-lg">{playlist.name}</p>
    </div>
  );
};
