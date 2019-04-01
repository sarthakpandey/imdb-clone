const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_KEY = require("../../config/keys").API_KEY;

const MAIN_URL = "https://api.themoviedb.org/3/";

const AIRING_TODAY_TV_SHOWS_URL =
  MAIN_URL + "tv/airing_today?api_key=" + API_KEY;

const ON_THE_AIR_TV_SHOWS_URL = MAIN_URL + "tv/on_the_air?api_key=" + API_KEY;

const POPULAR_TV_SHOWS_URL = MAIN_URL + "tv/popular?api_key=" + API_KEY;

const TOP_RATED_TV_SHOWS_URL = MAIN_URL + "tv/top_rated?api_key=" + API_KEY;

router.get("/airingtoday", (req, res) => {
  axios
    .get(AIRING_TODAY_TV_SHOWS_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/ontheair", (req, res) => {
  axios
    .get(ON_THE_AIR_TV_SHOWS_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/toprated", (req, res) => {
  axios
    .get(TOP_RATED_TV_SHOWS_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/popular", (req, res) => {
  axios
    .get(POPULAR_TV_SHOWS_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/:tv_id", (req, res) => {
  const TV_SHOW_URL =
    MAIN_URL + "tv/" + req.params.tv_id + "?api_key=" + API_KEY;
  axios
    .get(TV_SHOW_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

router.get("/similar/:tv_id", (req, res) => {
  const SIMILAR_TV_SHOW_URL =
    MAIN_URL + "tv/" + req.params.tv_id + "/similar" + "?api_key=" + API_KEY;
  axios
    .get(SIMILAR_TV_SHOW_URL)
    .then(result => res.json(result.data))
    .catch(err => console.error(err));
});

module.exports = router;
