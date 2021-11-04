import React, { useContext } from "react";
import { ChevronLeft, ChevronRight, Delete, CloseSquare } from "react-iconly";
import "Styles/Cart.css";
import { DataContext } from "Context/DataProvider";

export default function Cart() {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [total] = value.total;
  const [cart] = value.cart;
  const removeProduct = value.removeProduct;
  const increase = value.increase;
  const reduce = value.reduce;

  const tooglefalse = () => {
    setMenu(!menu);
  };
  const showBackCart = menu ? "Background Show" : "Background None";
  const showCart = menu ? "Shopping-Cart Show" : "Shopping-Cart None";
  return (
    <>
      <div className={showBackCart}>
        <div className={showCart}>
          {/* Cart Header */}
          <div className="Cart-Header">
            <div className="Cart-Header-Close" onClick={tooglefalse}>
              <div className="Icon">
                <CloseSquare set="bold" primaryColor="black" />
              </div>
            </div>
            <div className="Cart-Header-Title">
              <h2 className="Cart-Title">Carrito de Compras</h2>
            </div>
          </div>
          {/* Cart Products */}
          {cart.length === 0 ? (
            <h2 className="Cart-Title-Msg">Carro Vacío</h2>
          ) : (
            <div className="Cart-Container">
              {cart.map((producto) => (
                <div className="Cart-Item" key={producto.id}>
                  <div className="Cart-Content">
                    <div className="Cart-Img">
                      <img src={producto.img} alt={producto.title} />
                    </div>
                    <div className="Cart-Info">
                      <h3 className="Cart-Info-Title">{producto.name}</h3>
                      <p className="Cart-Info-Price">
                        Costo: <span>S/. {producto.price} </span>
                      </p>
                    </div>
                  </div>
                  <div className="Cart-Options">
                    <div className="Cart-Count">
                      <div className="Icon" onClick={() => reduce(producto.id)}>
                        <ChevronLeft set="bold" primaryColor="black" />
                      </div>
                      <p className="Cart-quantity">{producto.quantity}</p>
                      <div
                        className="Icon"
                        onClick={() => increase(producto.id)}
                      >
                        <ChevronRight set="bold" primaryColor="black" />
                      </div>
                    </div>
                    <div
                      className="Cart-Remove-Item"
                      onClick={() => removeProduct(producto.id)}
                    >
                      <div className="Icon">
                        <Delete set="bold" primaryColor="white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Cart Footer */}
          <div className="Cart-Footer">
            <h3 className="Cart-Total">Total a Pagar: S/. {total}</h3>
            <div className="Cart-Options-Total">
              <button
                className="button"
                onClick={() => alert("Su Producto se ha Enviado Correctamente")}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
