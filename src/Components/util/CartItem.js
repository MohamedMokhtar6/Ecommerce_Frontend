import React from "react";
import { Col, Row } from "react-bootstrap";
import pro from "../../Images/pro1.png";

function CartItem() {
  return (
    <Col className="my-2 d-flex px-2 justify-content-between">
      <img width="160px" height="197px" src={pro} alt="" />
      <div className="">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 ">ele</div>
            <div className="d-flex pt-2 click">
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 ">iphone</div>
            <div className="d-inline pt-2  me-2">4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className=" d-inline">brand : Apple</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className=" ms-2 "
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex  justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="  d-inline">Quantity:</div>
              <select className="mx-2 ">
                <option value="0">select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="d-inline pt-2">3000 EGP</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default CartItem;
