import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import ProductProvider from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import { AppProvider } from "./context/settings";

ReactDOM.render(
  <AppProvider >
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </AppProvider>,

  document.getElementById("root")
);
