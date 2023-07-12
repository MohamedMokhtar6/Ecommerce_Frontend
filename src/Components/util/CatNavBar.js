import React from "react";
import { NavLink } from "react-router-dom";

function CatNavBar() {
  return (
    <div className="navBar2 align-items-center py-2">
      <div className="navItem ">
        <NavLink to={"/Electronics"}>Electronics</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/Mobiles"}>Mobiles</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/Men"}>Men</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/Women"}>Women</NavLink>
      </div>
    </div>
  );
}

export default CatNavBar;
