import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="fs-3">{title}</div>
      {btntitle ? (
        <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="text-black fs-4 fw-bolder">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
