//Firebase Imports
const { firebaseDb } = require("../config/firebaseDb.js");
const { set, ref } = require("firebase/database");
const axios = require("axios");

//Express Imports
const express = require("express");

//Initialize Router
const router = express.Router();

//Function to push to database
const writeUserData = async (data) => {
  let res;
  console.log(data.desc);
  set(ref(firebaseDb, "users/" + data.id), {
    name: data.name,
    desc: data.desc,
    url: data.url,
    imageUrl: data.imageUrl,
    defaultUrl: data.defaultUrl,
  });
  res = "Pushed";
  console.log(res);
  return res;
};

//GET Spotify data
router.get("/:url", (req, res) => {
  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "client_credentials",
      client_id: "cc9a130d544a47568886b3a3ce10cce1",
      client_secret: process.env.SPOTIFY_KEY,
    },
  }).then((authData) => {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/playlists/" + req.params.url,
      headers: {
        Authorization: "Bearer " + authData.data.access_token,
      },
    }).then((playlistData) => {
      res.send(playlistData.data);
    });
  });
});

//POST router on /new
router.post("/new", (req, res) => {
  console.log(req.body);
  let entry = req.body;

  writeUserData(entry).then((data) => {});
});

module.exports = router;
