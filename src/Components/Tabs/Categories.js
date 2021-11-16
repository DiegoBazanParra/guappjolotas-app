import React, { useContext, Fragment } from "react";
import Link from "./Link.json";
import { DataContext } from "Context/DataProvider";

function Categories() {
  const value = useContext(DataContext);
  const handleTabs = value.handleTabs;
  return (
    <div className="TabBar">
      <div className="TabBar-Container">
        {Link.map((item) => (
          <input
            type="radio"
            name="slider"
            key={item.key}
            id={item.id}
            value={item.value}
            onClick={handleTabs}
          />
        ))}
        <nav>
          {Link.map((cate, i) => (
            <Fragment key={cate + i}>
              <label key={cate.id} htmlFor={cate.id} className={cate.id}>
                {cate.label}
              </label>
              <div className="slider"></div>
            </Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
export default Categories;
