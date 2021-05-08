import FilmTypes from "../types/FilmTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import { getApi } from "./util";

const movieUrl = (route, id = null) =>
  `${DOMAIN}/movie/${route}${
    id ? `/${id}` : ""
  }?api_key=${API_KEY}&language=en-US`;

export function fetchNowPlaying() {
  return {
    types: FilmTypes.FETCH_NOW_PLAYING,
    callAPI: () => getApi(movieUrl("now_playing")),
    payload: {},
  };
}

export function fetchPopular() {
  return {
    types: FilmTypes.FETCH_POPULAR,
    callAPI: () => getApi(movieUrl("popular")),
    payload: {},
  };
}

export function fetchTopRated() {
  return {
    types: FilmTypes.FETCH_TOP_RATED,
    callAPI: () => getApi(movieUrl("top_rated")),
    payload: {},
  };
}

export function fetchRecommendation(id) {
  return {
    types: FilmTypes.FETCH_RECOMMENDATION,
    callAPI: () => getApi(movieUrl(id, "recommendations")),
    payload: {},
  };
}

export function fetchDetail(id) {
  return {
    types: FilmTypes.FETCH_DETAIL,
    callAPI: () => getApi(movieUrl(id)),
    payload: {},
  };
}
