import FilmTypes from "../types/FilmTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import axios from "axios";

const movieUrl = (route) =>
  `${DOMAIN}/movie/${route}?api_key=${API_KEY}&language=en-US&page=1`;

export function fetchNowPlaying() {
  return {
    types: FilmTypes.FETCH_NOW_PLAYING,
    callAPI: () => postApi(movieUrl("now_playing")),
    payload: {},
  };
}

export function fetchPopular() {
  return {
    types: FilmTypes.FETCH_POPULAR,
    callAPI: () => postApi(movieUrl("popular")),
    payload: {},
  };
}

const postApi = (url, data = {}) => {
  return axios({
    method: "post",
    url,
    data,
  }).then((res) => {
    return res;
  });
};
