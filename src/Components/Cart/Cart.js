import "Styles/Cart/Cart.css";
import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
          <Header tooglefalse={tooglefalse} />
          <div className="Cart-Wrapper">
            {cart.length === 0 ? (
              <h2 className="Cart-Title-Msg">Carro Vacío</h2>
            ) : (
              <Content
                removeProduct={removeProduct}
                increase={increase}
                reduce={reduce}
                cart={cart}
              />
            )}
            <Footer total={total} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
