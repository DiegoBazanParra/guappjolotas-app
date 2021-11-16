import "Styles/Header.css";
import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import { Link } from "react-router-dom";

function Header() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [menu, setMenu] = value.menu;

  const tooglefalse = () => {
    setMenu(!menu);
  };

  return (
    <header className="Header">
      <div className="Header-Container">
        <Link to="/">
          <img
            src="https://i.imgur.com/vQ5rlbk.png"
            className="Logo"
            alt="Logo"
          />
        </Link>
        <div className="Cart" onClick={tooglefalse}>
          <img src="https://i.imgur.com/tDyYFSx.png" alt="Cart" />
          <span className="Cart-Total">{cart.length}</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
