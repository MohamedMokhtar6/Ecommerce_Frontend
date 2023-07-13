import React from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../Components/util/CartItem";
import CartCheckout from "../Components/util/CartCheckout ";

function CartPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row>
          <Col xs="8">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col xs="4">
            <CartCheckout />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartPage;
