import React, { useEffect, useRef, useState } from "react";
import movieFiles from "../services/movieFiles.json";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GlobalApi from "../services/GlobalApi";
const screenWidth = window.innerWidth;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'
const Slider = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() =>{
    getTrendingMovies()
  },[])

  const getTrendingMovies = () =>{
    GlobalApi.getTrendingVideos.then(res => {
      setMovieList(res.data.results)
    })
  }
  
  const elementRef = useRef();

  

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 120;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 120;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[50px] absolute mx-4 mt-[200px] cursor-pointer hover:shadow-xl"
        onClick={() => {
          slideLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[50px] absolute mx-8 mt-[200px] cursor-pointer right-0 hover:shadow-xl"
        onClick={() => {
          slideRight(elementRef.current);
        }}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide mx-0"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="movieListImage"
            className="min-w-full object-cover md:h-[400px] object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-300 transition-all ease-in "
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
