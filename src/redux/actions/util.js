import axios from "axios";

export const postApi = (url, data = {}) => {
  return axios({
    method: "post",
    url,
    data,
  }).then((res) => {
    return res;
  });
};
