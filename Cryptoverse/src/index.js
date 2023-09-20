import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider, { AppContext } from "./context/AppContext";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
  
  <BrowserRouter>
  <ThemeProvider>
  <AppContextProvider>
      <App /> 
  </AppContextProvider>
  </ThemeProvider>
  
  </BrowserRouter>
  
  </>

  
);
