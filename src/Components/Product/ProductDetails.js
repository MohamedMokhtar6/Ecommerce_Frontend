import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import notify from "../util/notify";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/Actions/ProductAction";
import ProductsRow from "./ProductsRow";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);
  const productLike = useSelector((state) => state.allproducts.allProducts);

  const Product = useSelector((state) => state.allproducts.oneProduct);
  let item = {};
  if (Product) {
    item = {
      ...Product,
      poster: Product.poster ? "data:image/png;base64," + Product.poster : "",
      brand: Product.brand || {}, // make sure brand is defined
      rate: Product.rate, // make sure brand is defined
      category: Product.category || {},
    };
  }

  useEffect(() => {
    if (item?.category?.id) {
      dispatch(getProductLike(item.category.id));
    }
  }, [item]);

  return (
    <>
      <Container className=" p-3  my-5 " style={{ minHeight: "76vh" }}>
        <Row>
          <Col xs="6">
            <img
              src={item.poster}
              alt={item.name}
              style={{ width: "20rem", height: "20rem" }}
            />
          </Col>
          <Col
            xs="6"
            className="d-flex flex-column justify-content-center p-0 "
          >
            <h3 className="fw-bold m-1">{item.name}</h3>
            <span className="d-block  m-1">
              Category: {item?.category?.name}{" "}
            </span>

            <span className="d-block  m-1">Brand: {item?.brand?.name}</span>

            <span className="d-block  m-1">
              Rating: {item?.rate}
              <i
                className="fa-solid fa-star "
                style={{ color: "goldenrod" }}
              ></i>
            </span>
            <p className=" m-1">{item.description}</p>
            <p className=" m-1">In Stock : {item.quntity}</p>
            <p className=" m-1">Price : {item.price} EGP</p>
            <Button
              className="fit  border-0 my-2"
              onClick={(e) => {
                notify("Request Sent Successfully", "Success");
                e.target.disabled = "true";
                e.target.innerHTML = "Done☑";
              }}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
      {productLike ? (
        <ProductsRow
          title={"You may like"}
          btntitle="More"
          pathText="/"
          products={productLike?.slice(0, 5)}
        />
      ) : null}

      <ToastContainer />
    </>
  );
}

export default ProductDetails;
