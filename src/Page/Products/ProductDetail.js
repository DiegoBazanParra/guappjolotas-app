import "Styles/ProductDetails.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Delete, Star } from "react-iconly";
import { DataContext } from "Context/DataProvider";
import Cart from "Components/Cart";
import ProductsRelated from "./ProductsRelated";

function ProductDetail() {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const params = useParams();
  const removeProduct = value.removeProduct;
  const [detalle, setDetalle] = useState([]);
  const addCarrito = value.addCarrito;
  const increase = value.increase;
  const reduce = value.reduce;
  let item = 0;

  useEffect(() => {
    productos.forEach((product) => {
      if (product.id === parseInt(params.id)) {
        setDetalle(product);
      }
    });
  }, [params.id, productos]);

  const handleAddCart = () => {
    addCarrito(detalle.id);
  };
  const reduceProduct = () => {
    reduce(detalle.id);
  };
  const increaseProduct = () => {
    increase(detalle.id);
  };
  const handleRemoveProduct = () => {
    removeProduct(detalle.id);
  };
  return (
    <>
      <div className="Details-Product">
        <div className="Detail-Container">
          <div className="Detail-Price">
            <div className="Detail-Img">
              <img src={detalle.img} width="100" alt="" />
            </div>
            <div className="Detail-Description">
              <h3 className="Detail-Price-Title">
                <p>{detalle.fullname}</p>
              </h3>
              <p className="Detail-Price-Description">
                Costo: <span>S/. {detalle.price}</span>
              </p>
            </div>
            <div className="Detail-Price-Quiantity">
              <div className="Detail-Price-Count">
                <div className="Icon" onClick={reduceProduct}>
                  <ChevronLeft set="bold" primaryColor="black" />
                </div>
                <p className="Detail-Quantity">{detalle.quantity}</p>
                <div className="Icon" onClick={increaseProduct}>
                  <ChevronRight set="bold" primaryColor="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="Detail-Content">
            <div className="Detail-Info">
              {detalle.qualification === 0 ? (
                ""
              ) : (
                <div className="Tags-Flover">
                  <p className="Qualification-Title">Puntuación:</p>
                  <div className="Tags-Qualification">
                    {productos.map(({ id }) => {
                      if (item < 5 && detalle.qualification) {
                        item += 1;
                        return (
                          <Star set="bold" primaryColor="#fcb235" key={id} />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              )}
              {detalle.type === 0 ? (
                ""
              ) : (
                <div className="Tags-Flover">
                  <p className="Tags-Flover-Title">Tags:</p>
                  <div className="Detail-Flavor">
                    <span>{detalle.type}</span>
                  </div>
                </div>
              )}
              <h3 className="Detail-Info-Title">Descripción:</h3>
              <p className="Detail-Info-Description">{detalle.description}</p>
            </div>
            <div className="Detail-Options">
              <button onClick={handleAddCart}>Añadir al Carrito</button>
              <div className="Detail-Remove-Item" onClick={handleRemoveProduct}>
                <div className="Icon">
                  <Delete set="bold" primaryColor="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
      {/* Products Related */}
      <ProductsRelated products={detalle} />
    </>
  );
}
export default ProductDetail;
