import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import { Link } from "react-router-dom";

function ProductItem({ item }) {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  const handleAddProduct = () => {
    addCarrito(item.id);
  };
  return (
    <div className="Product">
      <div className="Product-Add" onClick={handleAddProduct}>
        <p>+ Add</p>
      </div>
      <Link to={`/product/${item.id}`}>
        <div className="Image">
          <img src={item.img} width="100" alt="" />
        </div>
      </Link>
      <div className="Product-Description">
        <h3>{item.name}</h3>
        <p>S/. {item.price}</p>
      </div>
    </div>
  );
}
export default ProductItem;
