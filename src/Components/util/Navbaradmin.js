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
    if (user) dispatch(getCart(user.userId));
    // console.log(cart.items.length);
  }, [cart]);
  const handleClick = async () => {
    await localStorage.removeItem("user");
    await localStorage.removeItem("cartId");
    await localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="navBar align-items-center py-2">
        <div className="d-flex w-100 justify-content-around align-items-center ">
          <i
            className="fa-solid fa-bars fs-2 click hideNav fit  text-end"
            onClick={(e) => {
              let d = document.querySelectorAll(".navItem");
              let nav = document.querySelector(".navBar");
              for (const box of d) {
                box.classList.toggle("hide");
              }
            }}
          ></i>
          <div className=" justify-content-center  ms-2 fit">
            <Link to={"/"} className="text-white">
              Online Shop
            </Link>
          </div>
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
            <span>{cart.items?.length ? cart.items?.length : 0}</span>
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
          <Link to="/login" onClick={handleClick}>
            {user ? <>LogOut</> : <>SignIn</>}
          </Link>
        </div>
      </div>
      <CatNavBar />
    </>
  );
}

export default Navbaradmin;
