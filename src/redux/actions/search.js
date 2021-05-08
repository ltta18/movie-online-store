import SearchTypes from "../types/SearchTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import { getApi } from "./util";

export function searchByTitle(query) {
  return {
    types: SearchTypes.SEARCH_BY_TITLE,
    callAPI: () =>
      getApi(
        `${DOMAIN}/search/keyword?api_key=${API_KEY}&language=en-US&query=${query}`
      ),
    payload: {},
  };
}
