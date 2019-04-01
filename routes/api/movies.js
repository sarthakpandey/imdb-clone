const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_KEY = require("../../config/keys").API_KEY;

const MAIN_URL = "https://api.themoviedb.org/3/";

const NOW_PLAYING_MOVIES_URL =
  MAIN_URL + "movie/now_playing?api_key=" + API_KEY + "&language=en-US";

const POPULAR_MOVIES_URL =
  MAIN_URL + "movie/popular?api_key=" + API_KEY + "&language=en-US";

const TOP_RATED_MOVIES_URL =
  MAIN_URL + "movie/top_rated?api_key=" + API_KEY + "&language=en-US";

const UPCOMING_MOVIES_URL =
  MAIN_URL + "movie/upcoming?api_key=" + API_KEY + "&language=en-US";

router.get("/nowplaying", (req, res) => {
  axios
    .get(NOW_PLAYING_MOVIES_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/popular", (req, res) => {
  axios
    .get(POPULAR_MOVIES_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/toprated", (req, res) => {
  axios
    .get(TOP_RATED_MOVIES_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/upcoming", (req, res) => {
  axios
    .get(UPCOMING_MOVIES_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/:movie_id", (req, res) => {
  const MOVIE_URL = MAIN_URL + "movie/" + req.params.movie_id + "?api_key=" + API_KEY;
  axios
    .get(MOVIE_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/similar/:movie_id", (req, res) => {
  const SIMILAR_MOVIE_URL =
    MAIN_URL + "movie/" + req.params.movie_id + "/similar" + "?api_key=" + API_KEY;
  axios
    .get(SIMILAR_MOVIE_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

module.exports = router;
