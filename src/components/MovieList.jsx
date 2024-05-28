import React from "react";
// import movieFiles from "../services/movieFiles.json";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef, useState, useEffect } from "react";
import HrMovieList from "./HrMovieList";
import GlobalApi from "../services/GlobalApi";
const screenWidth = window.innerWidth;

const MovieList = ({ genreID, index }) => {
  const [movieList, setMovieList] = useState([]);

  const getMovieByGenereId = () => {
    GlobalApi.getMovieByGenre(genreID).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results)
    });
  };

  useEffect(() => {
    getMovieByGenereId();
  }, []);

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
        className={`hidden md:block text-white text-[50px] absolute mx-0  cursor-pointer hover:shadow-xl  ${
          index % 3 == 0 ? "mt-[100px]" : "mt-[150px]"
        } `}
        onClick={() => {
          slideLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[50px] absolute mx-10 mt-[150px] cursor-pointer right-0 hover:shadow-xl ${
          index % 3 == 0 ? "mt-[100px]" : "mt-[150px]"
        }`}
        onClick={() => {
          slideRight(elementRef.current);
        }}
      />
      <div
        className="flex scroll-smooth overflow-x-auto scrollbar-hide gap-8 pt-5 px-3 mx-10 pb-5"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <>
            {index % 3 == 0 ? (
              <HrMovieList movie={item} name={item.title} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
