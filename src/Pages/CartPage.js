import React, { useEffect, useState } from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../Components/util/CartItem";
import CartCheckout from "../Components/util/CartCheckout ";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Actions/CartAction";

function CartPage() {
  const dispatch = useDispatch();
  const cartId = localStorage.getItem("cartId");
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.cartReducer.cart);
  var user = JSON.parse(localStorage.getItem("user"));
  const userId = user.userId;

  useEffect(() => {
    dispatch(getCart(userId));
  }, []);
  useEffect(() => {
    if (cart.items) {
      setItems(cart.items);
    }
  }, [cart]);

  return (
    <>
      <Navbaradmin />
      <Container>
        <Row>
          <Col xs="8">
            {items.length > 0 ? (
              items.map((item, index) => {
                return <CartItem item={item} key={index} />;
              })
            ) : (
              <h1>No Product was Found</h1>
            )}
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
