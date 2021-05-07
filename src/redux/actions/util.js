import axios from "axios";

export const getApi = (url, data = {}) => {
  return axios({
    method: "get",
    url,
  }).then((res) => {
    return res;
  });
};
