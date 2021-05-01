import { combineReducers } from "redux";
import FilmTypes from "../types/FilmTypes";

function fetchNowPlaying(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_NOW_PLAYING_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

function fetchPopular(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_POPULAR_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

function fetchTopRated(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_TOP_RATED_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

function fetchRecommendation(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_RECOMMENDATION:
      return { ...action.data.results };
    default:
      return state;
  }
}

function fetchImage(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_IMAGE:
      return { ...action.data.results };
    default:
      return state;
  }
}

function fetchDetail(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_DETAIL:
      return { ...action.data.results };
    default:
      return state;
  }
}

export default combineReducers({
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchRecommendation,
  fetchImage,
  fetchDetail,
});
