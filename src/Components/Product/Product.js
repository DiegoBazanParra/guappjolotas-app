import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import ProductoItem from "./ProductItem";
import "Styles/Product.css";

function Product() {
  return <ProductList />;
}
export default Product;

function ProductList() {
  const value = useContext(DataContext);
  const displayProducts = value.displayProducts;

  return (
    <div className="Products">
      <div className="Container-Product">
        {displayProducts.map((item) => (
          <ProductoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
