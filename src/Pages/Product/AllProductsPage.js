import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container } from "react-bootstrap";
import ProductContainer from "../../Components/Product/ProductContainer";

function AllProductsPage() {
  return (
    <>
      <Navbaradmin />
      <Container style={{ minHeight: "76vh" }}>
        <ProductContainer />
      </Container>
    </>
  );
}

export default AllProductsPage;
