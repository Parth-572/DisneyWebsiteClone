import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "";
const movieByGenreBaseURl =
  "https://api.themoviedb.org/3/discover/movie?api_key=api_keywith_genres=";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey
);

const getMovieByGenre = (id) => {
   return axios.get(movieByGenreBaseURl + id)
};

export default {
  getTrendingVideos,
  getMovieByGenre,
};
