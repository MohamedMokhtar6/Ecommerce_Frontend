import React, { useEffect, useState } from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../Components/util/CartItem";
import CartCheckout from "../Components/util/CartCheckout ";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Actions/CartAction";
import { getOneProduct } from "../redux/Actions/ProductAction";

function CartPage() {
  const dispatch = useDispatch();
  const cartId = localStorage.getItem("cartId");
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.cartReducer.cart);
  const oneProduct = useSelector((state) => state.allproducts.oneProduct);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.userId;

  const fetchCartItemDetails = async () => {
    const updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      await dispatch(getOneProduct(item.productId));
      updatedItems.push({ ...item, product: oneProduct });
    }
    setItems(updatedItems);
  };

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (cart.items) {
      setItems(cart.items);
    }
  }, [cart]);

  useEffect(() => {
    if (items.length > 0) {
      fetchCartItemDetails();
    }
  }, [items]);

  return (
    <>
      <Navbaradmin />
      <Container>
        <Row>
          <Col xs="8">
            {items.length > 0 &&
              items.map((item, index) => <CartItem item={item} key={index} />)}
            {items.length === 0 && <h1>No Product was Found</h1>}
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
