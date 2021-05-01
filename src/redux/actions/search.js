import SearchTypes from "../types/SearchTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import { postApi } from "./util";

const searchUrl = (route, query) =>
  `${DOMAIN}/search/${route}?api_key=${API_KEY}&language=en-US&query=${query}`;

export function searchByTitle(query) {
  return {
    types: SearchTypes.SEARCH_BY_TITLE,
    callAPI: () => postApi(searchUrl("keyword", query)),
    payload: {},
  };
}

export function searchByPeople(query) {
  return {
    types: SearchTypes.SEARCH_BY_PEOPLE,
    callAPI: () => postApi(searchUrl("person", query)),
    payload: {},
  };
}
