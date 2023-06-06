import axios from "axios";

const fetchBeer = (setBeer) => {
  axios
    .get("https://api.punkapi.com/v2/beers/random")
    .then((res) => {
      setBeer(res.data[0]);
    })
    .catch((err) => console.log("Server error: " + err));
};

export default fetchBeer;
