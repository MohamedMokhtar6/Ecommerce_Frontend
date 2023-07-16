import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/Actions/ProductAction";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const [pro, setPro] = useState([]);
  useEffect(() => {
    // if (item.product) console.log(item);
  }, [item]);
  // if (item.product) {
  //   pro = {
  //     ...item.product,
  //     poster: item.product.poster
  //       ? "data:image/png;base64," + item.product.poster
  //       : "",
  //     brand: item.product.brand || {}, // make sure brand is defined
  //     rate: item.product.rate, // make sure brand is defined
  //     category: item.product.category || {},
  //   };
  // }

  return (
    <Col className="my-2 d-flex px-2 justify-content-between">
      {/* <img width="160px" height="197px" src={pro.poster} alt="" /> */}
      <div className="">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            {/* <div className="d-inline pt-2 ">{pro.product.category.name}</div> */}
            <div className="d-flex pt-2 click">
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            {/* <div className="d-inline pt-2 ">{pro.name}</div> */}
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            {/* <div className=" d-inline">brand : {pro.brand.name}</div> */}
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
            <div className="d-inline pt-2">{item.unitPrice} EGP</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default CartItem;
