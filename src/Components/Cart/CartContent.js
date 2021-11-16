import React from "react";
import { ChevronLeft, ChevronRight, Delete } from "react-iconly";

function CartContent({ cart, reduce, increase, removeProduct }) {
  return (
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
              <div className="Icon" onClick={() => increase(producto.id)}>
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
  );
}

export default CartContent;
