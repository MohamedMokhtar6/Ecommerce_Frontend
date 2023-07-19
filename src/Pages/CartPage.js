import React, { useEffect, useState } from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../Components/util/CartItem";
import CartCheckout from "../Components/util/CartCheckout ";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Actions/CartAction";
import { getOneProduct } from "../redux/Actions/ProductAction";
import { getCartItem } from "../redux/Actions/CartItemsAction";

function CartPage() {
  const dispatch = useDispatch();
  const cartId = localStorage.getItem("cartId");
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.cartItemsReducer.cartItem);
  const oneProduct = useSelector((state) => state.allproducts.oneProduct);
  const user = JSON.parse(localStorage.getItem("user"));
  let userId = null;
  if (user) {
    userId = user.userId;
  }
  // const [total, setTotal] = useState(0);
  let total = 0;

  useEffect(() => {
    dispatch(getCartItem(cartId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (cart) {
      setItems(cart);
    }
  }, [cart]);
  if (cart) {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const tot = cart[i].quantity * cart[i].unitPrice;
        total = total + tot;
        //   // console.log(cart[i].quantity);
        //   // console.log(cart[i].unitPrice);
        // }
      }
    }
    // console.log(total);
    // console.log(cart);
  }
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row>
          <Col xs="10">
            {items.length > 0 &&
              items.map((item, index) => <CartItem item={item} key={index} />)}
            {items.length === 0 && <h1>No Product was Found</h1>}
          </Col>
          <Col xs="2">
            <CartCheckout total={total} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartPage;
