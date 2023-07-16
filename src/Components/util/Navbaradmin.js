import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CatNavBar from "./CatNavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductSearch,
  getProducts,
} from "../../redux/Actions/ProductAction";
import { getCart } from "../../redux/Actions/CartAction";

function Navbaradmin() {
  var user = JSON.parse(localStorage.getItem("user"));
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const cart = useSelector((state) => state.cartReducer.cart);
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
  useEffect(() => {
    dispatch(getCart(user.userId));
    // console.log(cart.items.length);
  }, [cart]);

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
            <span>{cart.items?.length}</span>
          </Link>
        </div>
        {user ? (
          <div className="d-flex justify-content-center navItem">
            <Link to="/cart">
              <span>Welcome Back {user.userName}</span>
            </Link>
          </div>
        ) : null}

        <div className="d-flex justify-content-center navItem">
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("cartId");
              localStorage.removeItem("token");
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
