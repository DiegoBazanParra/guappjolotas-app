import React from "react";
// Components
import Product from "Components/Product/Product";
import Pagination from "Components/Pagination";
import Tabs from "Components/Tabs/Tabs";
import InputSearch from "Components/InputSearch";
import Hero from "Components/Hero";
import Cart from "Components/Cart/Cart";

function Products() {
  return (
    <>
      <Hero />
      <InputSearch />
      <Tabs />
      <Product />
      <Pagination />
      <Cart />
    </>
  );
}
export default Products;
