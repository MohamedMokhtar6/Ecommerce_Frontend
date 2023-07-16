import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/Actions/ProductAction";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [change, setChange] = useState([]);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handelDelete = (e) => {
    console.log(e.target.parentElement.id);
  };

  return (
    <Col className="my-2 d-flex px-2 justify-content-between">
      <img
        width="160px"
        height="197px"
        src={"data:image/png;base64," + item.product.poster}
        alt=""
      />
      <div className="">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-end">
            <div
              id={item.id}
              className="d-flex pt-2 click"
              onClick={handelDelete}
            >
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 ">{item.product.name}</div>
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
              <select
                className="mx-2 "
                value={quantity}
                onChange={changeQuantity}
              >
                <option value="0">select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </Col>
          <div className="d-inline pt-2">{item.unitPrice} EGP</div>
        </Row>
      </div>
    </Col>
  );
}

export default CartItem;
