import React from "react";
import { Link } from "react-router-dom";

function ProductRelatedItem({ item }) {
  return (
    <div className="Product-Flavor-Related">
      <Link to={`/product/${item.id}`}>
        <img src={item.flavor} width="50" alt="" />
      </Link>
    </div>
  );
}
export default ProductRelatedItem;
