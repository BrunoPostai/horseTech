import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

// import { Container } from './styles';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={<Home/>} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
