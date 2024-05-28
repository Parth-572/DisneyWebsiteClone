import React from "react";
import disney from "../assets/images/disney.png";
import pixar from "../assets/images/pixar.png";
import starWars from "../assets/images/starwar.png";
import marvel from "../assets/images/marvel.png";
import natgeo from "../assets/images/nationalG.png";

import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import natgeoV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarsV from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const prodList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: natgeo,
      video: natgeoV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starWars,
      video: starwarsV,
    },
  ];

  return (
    <div className="flex  gap-2 md:gap-5 p-2 px-5 md:px-16">
      {prodList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-500 rounded-lg  hover:scale-110 transition-all duration-300 cursor-pointer 
           relative shadow-xl shadow-gray-900">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          ></video>

          <img
            src={item.image}
            alt="image"
            className="w-full z-[1] opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
