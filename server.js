const express = require("express");
const path = require("path");

const app = express();

const FRONT_END_PATH = path.join(__dirname, "public");

app.use("/", express.static(FRONT_END_PATH));

app.use("/api/movies", require("./routes/api/movies"));

app.use("/api/tvshows", require("./routes/api/tvshows"));

app.listen(2222, () => {
  console.log("Server started");
});
