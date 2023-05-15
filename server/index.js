const express = require("express");
const shareRoutes = require("./routes/share.js");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/ongaku/share", shareRoutes);

app.get("/ongaku", () => {
  console.log("GET on /ongaku");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
