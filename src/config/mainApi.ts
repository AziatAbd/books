import axios from "axios";

const BASE_URL =
  "https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyA5zidZsKEgGRC-U4c1F8b3HjmikMbYoBE";

const mainApi = axios.create({
  baseURL: `${BASE_URL}`,
});

export default mainApi;
