import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  var rate = Array(product?.rate).fill(0);

  return (
    <Link to={`/product/${product.id}`} className="prodCard fit">
      <Card style={{ width: "14rem" }} className="m-2 align-items-center">
        <Card.Img
          variant="top"
          src={"data:image/png;base64," + product.poster}
          style={{ width: "200px", height: "200px", padding: "1rem" }}
        />
        <div className="d-flex w-100">
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
            <Button variant="primary">
              <i className="fa-solid fa-cart-shopping"></i>
              Add to Cart
            </Button>
          </Card.Body>
        </div>
      </Card>
    </Link>
  );
}

export default ProductCard;
