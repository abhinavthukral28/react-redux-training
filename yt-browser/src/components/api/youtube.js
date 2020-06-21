import axios from "axios";
const KEY = "AIzaSyCOq-Q7KRSmBd-fUrW7_8-pFqazDSO5YFA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
