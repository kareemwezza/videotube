import axios from "axios";
const KEY = "AIzaSyCK14-HDwFUhDhwvQHMUdEJnH8EiPJzhvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY,
  },
});
