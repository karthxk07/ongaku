import axios from "axios";

//Generating an Api key
const getApiKey = async () => {
  let apiKey;
  await axios({
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "client_credentials",
      client_id: "cc9a130d544a47568886b3a3ce10cce1",
      client_secret: process.env.REACT_APP_SPOTIFY_KEY,
    },
  }).then((res) => {
    apiKey = res.data.access_token;
  });
  return apiKey;
};

const getData = async (url) => {
  url = new URL(url);
  console.log(url.pathname.slice(9));
  let data;
  let apiKey;
  await getApiKey().then((res) => {
    apiKey = res;
  });

  await axios({
    method: "get",
    url: "https://api.spotify.com/v1/playlists" + url.pathname.slice(9),
    headers: {
      // prettier-ignore
      "Authorization": "Bearer " + apiKey,
    },
  }).then(function (response) {
    data = response.data;
  });
  console.log(data.images[0].url);
  return data;
};

const pushData = async (url) => {
  let data;
  await getData(url).then((res) => {
    data = res;
  });
  trendingList.push({ name: data.name, imgUrl: data.images[0].url });
};

pushData("https://open.spotify.com/playlist/6ib4FrN6IBljvp8wiYMDhA");
pushData("https://open.spotify.com/playlist/5xdDrQ7tPJScA48I4ATO2G");

export let trendingList = [
  { name: "sukoon", imgUrl: "" },
  { name: "sukoon", imgUrl: "/ongaku/logo.png" },
];
