import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CatNavBar from "./CatNavBar";

function Navbaradmin() {
  var user = localStorage.getItem("user");

  const navigate = useNavigate();
  return (
    <>
      <div className="navBar align-items-center py-2">
        <i
          className="fa-solid fa-bars fs-2 click hideNav w-75  text-end"
          onClick={(e) => {
            let d = document.querySelectorAll(".navItem");
            let nav = document.querySelector(".navBar");
            for (const box of d) {
              box.classList.toggle("hide");
            }
          }}
        ></i>
        <div className=" justify-content-center navItem ms-2">
          <Link to={"/"}>Online Shop</Link>
        </div>
        <div>
          <input
            type="search"
            placeholder="what are you looking for ?"
            className="search"
          />
        </div>

        <div className="d-flex justify-content-center navItem">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping mx-1"></i>
            <span>0</span>
          </Link>
        </div>
        <div className="d-flex justify-content-center navItem">
          <Link to="/login">{user ? <>LogOut</> : <>SignIn</>}</Link>
        </div>
      </div>
      <CatNavBar />
    </>
  );
}

export default Navbaradmin;
