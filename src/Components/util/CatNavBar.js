import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategory } from "../../redux/Actions/CategoryAction";

function CatNavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return (
    <div className="navBar2 align-items-center py-2">
      {Array.isArray(categories) && categories.length > 0
        ? categories.map((item, index) => (
            <div key={index} className="navItem">
              <NavLink to={"/category/" + item.id}>{item.name}</NavLink>
            </div>
          ))
        : null}
    </div>
  );
}

export default CatNavBar;
