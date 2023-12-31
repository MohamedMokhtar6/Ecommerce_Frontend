import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../util/SubTitle";
import Skeleton from "../util/Skeleton";

function ProductsRow({ title, btntitle, pathText, products }) {
  let items = [];

  if (products.length > 0) {
    items = products;
  }
  return (
    <Container className="mb-2">
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-center ">
        {items ? (
          items.map((item, index) => {
            return <ProductCard key={index} product={item} />;
          })
        ) : (
          <Skeleton />
        )}
      </Row>
    </Container>
  );
}

export default ProductsRow;
