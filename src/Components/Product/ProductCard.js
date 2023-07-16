import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createCartItem } from "../../redux/Actions/CartItemsAction";
import notify from "../util/notify";
import { ToastContainer } from "react-toastify";

function ProductCard({ product }) {
  var rate = Array(product?.rate).fill(0);
  const dispatch = useDispatch();

  const cartId = localStorage.getItem("cartId");
  const proId = product.id;

  const addToCart = async (e) => {
    e.preventDefault();
    if (cartId) {
      const formData = new FormData();
      formData.append("CartId", cartId);
      formData.append("ProductId", proId);
      formData.append("Quantity", 1);
      await dispatch(createCartItem(formData));
    } else {
      notify("Sign In First", "warn");
    }
  };

  return (
    <Card style={{ width: "14rem" }} className="m-2 align-items-center">
      <Link to={`/product/${product.id}`} className="prodCard fit">
        <Card.Img
          variant="top"
          src={"data:image/png;base64," + product.poster}
          style={{ width: "200px", height: "200px", padding: "1rem" }}
        />
        <div className="d-flex w-100 flex-column">
          <Card.Body>
            <Card.Title className="cName">{product?.name}</Card.Title>
            <Card.Text>{product?.category?.name}</Card.Text>
            <div style={{ color: "goldenrod" }}>
              {rate
                ? rate.map((i, index) => {
                    return <i className="fa-solid fa-star" key={index}></i>;
                  })
                : null}
            </div>
            <p className="my-1">{product.price} EGP</p>
            <Button variant="primary" onClick={addToCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              Add to Cart
            </Button>
          </Card.Body>
        </div>
      </Link>
      <ToastContainer />
    </Card>
  );
}

export default ProductCard;
