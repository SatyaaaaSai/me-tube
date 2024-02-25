import React from "react";
import MenuItems from "./MenuItems";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
     <MenuItems/>
     <Outlet/>
    </div>
  );
};

export default Body;
