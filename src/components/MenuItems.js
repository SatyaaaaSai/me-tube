import React from "react";
import { useSelector } from "react-redux";
const MenuItems = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 w-48 shadow-lg">
      <ul className="p-2">
        <li>Home</li>
        <li>Shorts</li>
        <li className="pb-5">Subscriptions</li>
      </ul>
      <ul className="pt-2 border-t-2 pl-2 pr-2 pb-2">
        <li>You</li>
        <li className="pb-4">History</li>
      </ul>
      <h1 className="pt-2 border-t-2 font-bold">Explore</h1>
      <ul className="p-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion & beauty</li>
        <li className="pb-4">Podcasts</li>
      </ul>
      <ul className="pt-2 border-t-2">
        <li className="pb-4 pl-2 pr-2 pt-2">Browse channels</li>
      </ul>
      <h1 className="pt-2 border-t-2 font-bold">More From Youtube</h1>
      <ul className="p-2">
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      <ul className="pt-2 border-t-2 pl-2 pr-2 pb-2">
        <li>Settings</li>
        <li>Report history</li>
        <li>Hep</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default MenuItems;
