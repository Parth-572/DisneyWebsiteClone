import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center gap-4 text-[18px] h-[60px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-0">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
