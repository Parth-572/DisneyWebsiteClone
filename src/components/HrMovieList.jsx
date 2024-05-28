import React from "react";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'

const HrMovieList = ({ movie, name }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150  
    cursor-pointer ease-in">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt="movie "
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px]
         border-gray-400  h-[200px]"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 ">{name}</h2>
    </section>
  );
};

export default HrMovieList;
