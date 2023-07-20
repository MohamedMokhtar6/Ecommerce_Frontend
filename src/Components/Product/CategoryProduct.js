import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductLike } from "../../redux/Actions/ProductAction";
import ProductCard from "./ProductCard";
import Skeleton from "../util/Skeleton";

function CategoryProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productLike = useSelector((state) => state.allproducts.allProducts);
  useEffect(() => {
    if (id) {
      dispatch(getProductLike(id));
    }
  }, [id]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productLike ? (
        productLike.map((item, index) => {
          return <ProductCard key={index} product={item} />;
        })
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default CategoryProduct;
