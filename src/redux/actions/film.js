import FilmTypes from "../types/FilmTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import axios from "axios";

export function fetchNowPlaying() {
  return {
    types: FilmTypes.FETCH_NOW_PLAYING,
    callAPI: () =>
      postApi(`${DOMAIN}/movie/now_playing?api_key=${API_KEY}&language=en-US`),
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
