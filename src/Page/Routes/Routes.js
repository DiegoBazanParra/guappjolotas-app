import React from "react";
import { Switch, Route } from "react-router-dom";
// Controla las Paginas
import Products from "Page/Products/Products";
import ProductDetail from "Page/Products/ProductDetail";
import Wrapper from "Components/Wrapper";

function Routes() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" exact component={ProductDetail} />
      </Switch>
    </Wrapper>
  );
}
export default Routes;
