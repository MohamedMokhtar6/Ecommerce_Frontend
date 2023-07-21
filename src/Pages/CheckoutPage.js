import React, { useEffect, useState } from "react";
import Navbaradmin from "../Components/util/Navbaradmin";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import notify from "../Components/util/notify";
import { ToastContainer } from "react-toastify";
import { createOrder } from "../redux/Actions/OrderAction";
import { useNavigate } from "react-router-dom";
export default function CheckoutPage() {
  const cartId = localStorage.getItem("cartId");
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  const Navigate = useNavigate();
  const userId = user.userId;
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const orderStatus = "Pending";
  const res = useSelector((state) => state.orderReducer.order);
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changePhone = (e) => {
    setPhoneNumber(e.target.value);
  };
  const Submit = async () => {
    if (address === "" || phoneNumber === "" || city === "") {
      notify("Complete Data", "warn");
      return;
    }
    await dispatch(
      createOrder(cartId, {
        address,
        city,
        phoneNumber,
        userId,
        orderStatus,
      })
    );
    notify("Order Placed", "success");
    setInterval(() => {
      Navigate("/");
    }, 1000);
  };

  return (
    <>
      <Navbaradmin />
      <Container style={{ minHeight: "76vh" }}>
        <Row className="my-4">
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={changeAddress}
            className=""
          />
          <input
            type="text"
            placeholder="Your City"
            value={city}
            onChange={changeCity}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={changePhone}
          />
          <Button onClick={Submit}>Place order</Button>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}
