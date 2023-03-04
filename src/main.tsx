import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import KeyContextProvider from "./Context/KeyContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <KeyContextProvider>
          <App />
        </KeyContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
