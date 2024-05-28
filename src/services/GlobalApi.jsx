import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "c79189b68161eb339d4fe6d7d06d7429";
const movieByGenreBaseURl =
  "https://api.themoviedb.org/3/discover/movie?api_key=c79189b68161eb339d4fe6d7d06d7429&with_genres=";

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
