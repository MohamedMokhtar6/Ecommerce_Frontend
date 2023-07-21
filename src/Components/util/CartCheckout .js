import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = ({ total }) => {
  const user = localStorage.getItem("user");
  return (
    <Row className="my-1 d-flex justify-content-center  pt-3">
      <Col xs="12" className="d-flex  flex-column align-items-center  ">
        <div className="  my-3  ">{total} EGP</div>
        <Link
          to={user ? "/order/checkout" : "/"}
          style={{ textDecoration: "none" }}
          className=" d-inline "
        >
          <Button className=" w-100 px-2"> Buy Now</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
