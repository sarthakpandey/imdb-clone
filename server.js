const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 2222;

const FRONT_END_PATH = path.join(__dirname, "public");

app.use("/", express.static(FRONT_END_PATH));

app.use("/api/movies", require("./routes/api/movies"));

app.use("/api/tvshows", require("./routes/api/tvshows"));

app.listen(PORT, () => {
  console.log("Server started at " + PORT);
});
