import "Styles/Cart.css";
import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";

function Cart() {
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
          <CartHeader tooglefalse={tooglefalse} />
          {cart.length === 0 ? (
            <h2 className="Cart-Title-Msg">Carro Vacío</h2>
          ) : (
            <CartContent
              removeProduct={removeProduct}
              increase={increase}
              reduce={reduce}
              cart={cart}
            />
          )}
          <CartFooter total={total} />
        </div>
      </div>
    </>
  );
}
export default Cart;
