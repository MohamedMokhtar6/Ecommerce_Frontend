import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbaradmin from "../Components/util/Navbaradmin";
import Slider from "../Components/util/Slider";
import s1 from "../Images/slider1.png";
import s2 from "../Images/slider2.png";
import s3 from "../Images/slider3.png";
import s4 from "../Images/slider4.png";
import ProductContainer from "../Components/Product/ProductContainer";
import ProductsRow from "../Components/Product/ProductsRow";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Actions/ProductAction";
import Skeleton from "../Components/util/Skeleton";

function HomePage() {
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
  let Images = [s1, s2, s3, s4];
  return (
    <>
      <Navbaradmin />
      <Container
        style={{ minHeight: "76vh" }}
        className="d-flex align-items-center flex-column"
      >
        <Slider images={Images} />
        {products.length > 0 ? (
          <ProductsRow
            btntitle={"More"}
            title={"Best Seller"}
            pathText={"/allProducts"}
            products={products.slice(0, 5)}
          />
        ) : (
          <Skeleton />
        )}
      </Container>
    </>
  );
}

export default HomePage;
