import React from "react";
import { Card } from "react-bootstrap";

function Skeleton() {
  return (
    // <div className="d-flex justify-content-center">
    //   <div className="skeleton"></div>
    // </div>
    <Card style={{ width: "14rem" }} className="m-2 align-items-center ">
      <div
        className="skeleton my-3"
        style={{ width: "200px", height: "200px", padding: "1rem" }}
      ></div>

      <div className="d-flex w-100 flex-column">
        <Card.Body>
          <Card.Title
            className="cName skeleton "
            style={{ height: "20px" }}
          ></Card.Title>
          <Card.Text
            className="skeleton w-75"
            style={{ height: "20px" }}
          ></Card.Text>

          <Card.Text
            className="skeleton w-50"
            style={{ height: "20px" }}
          ></Card.Text>

          <Card.Text
            className="skeleton w-25"
            style={{ height: "20px" }}
          ></Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Skeleton;
