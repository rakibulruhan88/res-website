import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/storeContext/StoreContext.jsx";
import Cartcontextprovider from "./context/cartcontext/Cartcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <Cartcontextprovider>
          <App />
        </Cartcontextprovider>
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
