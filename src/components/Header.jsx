import React from "react";
import logo from "../assets/images/logo2.png";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import profile from "../assets/images/profile.jpeg";
import {
  HiMagnifyingGlass,
  HiPlayCircle,
  HiTv,
  HiStar,
  HiHome,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center ">
        <img
          src={logo}
          alt="Disney"
          className="w-[80px] md:w-[115px] h-[60px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem name={""} Icon={item.icon} key={item.name} />
              )
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={" "} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] p-1 border-gray-700 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem
                      name={item.name}
                      Icon={item.icon}
                      key={item.name}
                    />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src={profile}
        alt="profile"
        className="rounded-full w-[50px] cursor-pointer"
      />
    </div>
  );
};

export default Header;
