import React from "react";
import { CloseSquare } from "react-iconly";

function CartHeader({ tooglefalse }) {
  return (
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
  );
}

export default CartHeader;
