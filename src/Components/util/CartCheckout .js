import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <Row className="my-1 d-flex justify-content-center  pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className=" d-inline w-100 my-3  ">34000 جنية</div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className=" d-inline "
        >
          <button className=" w-100 px-2"> اتمام الشراء</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
