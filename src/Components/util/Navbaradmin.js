import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CatNavBar from "./CatNavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductSearch,
  getProducts,
} from "../../redux/Actions/ProductAction";

function Navbaradmin() {
  var user = localStorage.getItem("user");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const changeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value !== "") {
      dispatch(getAllProductSearch(value));
      console.log(allProducts);
    } else {
      dispatch(getProducts());
    }
  };
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
            value={search}
            onChange={changeSearch}
          />
        </div>

        <div className="d-flex justify-content-center navItem">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping mx-1"></i>
            <span>5</span>
          </Link>
        </div>
        {user ? (
          <div className="d-flex justify-content-center navItem">
            <Link to="/cart">
              <span>Welcome Back Mohamed Mokhtar</span>
            </Link>
          </div>
        ) : null}

        <div className="d-flex justify-content-center navItem">
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            {user ? <>LogOut</> : <>SignIn</>}
          </Link>
        </div>
      </div>
      <CatNavBar />
    </>
  );
}

export default Navbaradmin;
