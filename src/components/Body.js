import React from "react";
import MenuItems from "./MenuItems";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
     <MenuItems/>
     <MainContainer/>
    </div>
  );
};

export default Body;
