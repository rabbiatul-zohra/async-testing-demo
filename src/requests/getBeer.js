import axios from "axios";

const getBeer = async () => {
  return axios
    .get("https://api.punkapi.com/v2/beers/random")
    .then((res) => {
      return res.data[0];
    })
};

export default getBeer;
