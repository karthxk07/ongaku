export const PlaylistCard = (playlistDetails) => {
  console.log(playlistDetails.imgUrl);
  return (
    <div className="w-100 h-fit bg-white rounded-lg m-5 overflow-hidden p-3">
      <img
        alt="Playlist1"
        src={playlistDetails.imgUrl}
        className={`w-100 rounded-lg`}
      ></img>
      <p className="text-lg">{playlistDetails.name}</p>
    </div>
  );
};
