import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container } from "react-bootstrap";
import ProductContainer from "../../Components/Product/ProductContainer";

function AllProductsPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <ProductContainer />
      </Container>
    </>
  );
}

export default AllProductsPage;
