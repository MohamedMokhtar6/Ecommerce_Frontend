import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Actions/ProductAction";

function ProductContainer() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  let products = [];
  if (allProducts) {
    products = allProducts;
  } else {
    products = [];
  }
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.length > 0 ? (
        products.map((item, index) => {
          return <ProductCard key={index} product={item} />;
        })
      ) : (
        <h1>No Product Found!!</h1>
      )}
    </div>
  );
}

export default ProductContainer;
