import { createContext, useState, useEffect } from "react";
import Data from "Data/Data.json";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState(false);

  const producto = Data;
  useEffect(() => {
    if (producto) {
      setProducts(producto.slice(0, 50));
    } else {
      setProducts([]);
    }
  }, [producto]);

  // Filter Categories Products
  const handleTabs = (e) => {
    let word = e.target.value;
    if (word === "All") {
      setProducts(producto);
    } else if (word === "Bebidas") {
      const filtered = producto.filter((item) => item.type === "Bebidas");
      setProducts(filtered);
    } else if (word === "Guajolota") {
      const filtered = producto.filter((item) => item.type === "Guajolota");
      setProducts(filtered);
    } else if (word === "Tamal") {
      const filtered = producto.filter((item) => item.type === "Tamal");
      setProducts(filtered);
    }
  };
  // Filter Related Products

  // Filter Search Products
  const handleSearch = (e) => {
    let word = e.target.value;
    if (word === "") {
      setProducts(Data);
    } else if (word) {
      const filtered = Data.filter((item) =>
        item.name.toLowerCase().includes(word.toLowerCase())
      );
      setProducts(filtered);
    }
  };
  // Add to Cart
  const addCarrito = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((producto) => {
        return producto.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("El producto se ha añadido al cart");
    }
  };
  // Save To Products in LocalStorage
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);
  // Load To Products of LocalStorage
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  // Total Products
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  // Handle Cart Products
  // Cart Remove Product
  const removeProduct = (id) => {
    if (window.confirm("¿Quieres Eliminar el Producto del Carrito?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.quantity = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  // Cart Increment Product
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };
  // Const Decrement Product
  const reduce = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(products.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  // console.log(productos);
  const value = {
    // Products
    productos: [products],
    // Menu
    menu: [menu, setMenu],
    // Filter Categorie Products
    handleTabs: handleTabs,
    // Filter Search Products
    handleSearch: handleSearch,
    // Pagination
    changePage: changePage,
    pageCount: pageCount,
    displayProducts: displayProducts,
    // Cart
    cart: [cart, setCart],
    // Add Products To Cart
    addCarrito: addCarrito,
    // Total Product Cart
    total: [total, setTotal],
    // Remove Product Cart
    removeProduct: removeProduct,
    // Reduce Product Cart
    reduce: reduce,
    // Increment Product Cart
    increase: increase,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
