import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/Actions/ProductAction";
import {
  deleteCartItem,
  updateCartItem,
} from "../../redux/Actions/CartItemsAction";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const id = item.id;
  const [quantity, setQuantity] = useState(item.quantity);
  const [change, setChange] = useState([]);

  const changeQuantity = async (e) => {
    await setQuantity(e.target.value);
    await dispatch(updateCartItem(id, e.target.value));
    await console.log(e.target.value);
    window.location.reload();
  };
  const handelDelete = async (e) => {
    const id = e.target.parentElement.id;
    await dispatch(deleteCartItem(id));
    window.location.reload();
  };

  return (
    <Col className="my-2 d-flex px-2 ">
      <img
        width="160px"
        height="197px"
        src={"data:image/png;base64," + item.product.poster}
        alt=""
      />
      <div className="w-100 ms-5">
        <Row className="">
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
          <div className="d-inline pt-2 ">{item.product.name}</div>
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
