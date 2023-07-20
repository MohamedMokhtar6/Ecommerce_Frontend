import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between ">
      <div className="fs-3 p-1" style={{ borderRadius: "20px" }}>
        {title}
      </div>
      {btntitle ? (
        <div className="d-flex align-items-center">
          <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
            <div className="text-black fs-4 fw-bolder">{btntitle}</div>
          </Link>
          <div className="mx-2">
            <i class="fa-solid fa-arrow-left click mx-1"></i>
            <i class="fa-solid fa-arrow-right click"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SubTitle;
