import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsPage,
} from "../../redux/Actions/ProductAction";
import Pagination from "../util/Pagination";
import Skeleton from "../util/Skeleton";

function ProductContainer() {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const AllProductsPage = useSelector(
    (state) => state.allproducts.allProductsPage
  );
  useEffect(() => {
    dispatch(getProducts());

    dispatch(getProductsPage(10, 1));
  }, []);
  let products = [];
  let productsPage = [];
  if (allProducts) {
    products = allProducts;
  } else {
    products = [];
  }
  if (AllProductsPage) {
    productsPage = AllProductsPage;
  } else {
    productsPage = [];
  }
  useEffect(() => {
    let num = 0;
    if (products.length > 0) {
      num = Math.ceil(products.length / 10);
      setPageCount(num);
    }
  }, [products.length]);
  const onPress = async (page) => {
    await dispatch(dispatch(getProductsPage(10, page)));
  };
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {productsPage.length > 0 ? (
          productsPage.map((item, index) => {
            return <ProductCard key={index} product={item} />;
          })
        ) : (
          <Skeleton />
        )}
      </div>
      <Pagination pageCount={pageCount} onPress={onPress} />
    </>
  );
}

export default ProductContainer;
