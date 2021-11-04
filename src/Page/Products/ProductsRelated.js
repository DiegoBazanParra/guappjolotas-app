import "Styles/Flavor.css";
import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import ProductRelatedItem from "./ProductRelatedItem";

function ProductsRelated({ products }) {
  const value = useContext(DataContext);
  const displayProducts = value.displayProducts;
  const filtered = displayProducts.filter(
    (item) => item.type === products.type
  );
  return (
    <>
      <h3 className="Detail-Products-Relevant">Sabor</h3>
      <p className="Detail-Description-Relevant">
        Escoge el sabor de {products.type} que más te guste...
      </p>
      <div className="Product-Related">
        {filtered.map((item) => (
          <ProductRelatedItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
export default ProductsRelated;
