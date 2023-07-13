import React from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Container } from "react-bootstrap";
import CategoryProduct from "../Components/Product/CategoryProduct";

function CategoriesPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <CategoryProduct />
      </Container>
    </>
  );
}

export default CategoriesPage;
