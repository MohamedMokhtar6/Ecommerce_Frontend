import React from "react";
import { Container } from "react-bootstrap";
import Navbaradmin from "../Components/util/Navbaradmin";
import Slider from "../Components/util/Slider";
import s1 from "../Images/slider1.png";
import s2 from "../Images/slider2.png";
import s3 from "../Images/slider3.png";
import s4 from "../Images/slider4.png";
import ProductContainer from "../Components/Product/ProductContainer";

function HomePage() {
  let Images = [s1, s2, s3, s4];
  return (
    <>
      <Navbaradmin />
      <Container>
        <Slider images={Images} />
        <ProductContainer />
      </Container>
    </>
  );
}

export default HomePage;
