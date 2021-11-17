import React from "react";
import { ChevronLeft, ChevronRight, Delete } from "react-iconly";

function Content({ cart, reduce, increase, removeProduct }) {
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
              <button className="Icon" onClick={() => reduce(producto.id)}>
                <ChevronLeft set="bold" primaryColor="black" />
              </button>
              <p className="Cart-quantity">{producto.quantity}</p>
              <button className="Icon" onClick={() => increase(producto.id)}>
                <ChevronRight set="bold" primaryColor="black" />
              </button>
            </div>
            <button
              className="Cart-Remove-Item"
              onClick={() => removeProduct(producto.id)}
            >
              <div className="Icon">
                <Delete set="bold" primaryColor="white" />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
