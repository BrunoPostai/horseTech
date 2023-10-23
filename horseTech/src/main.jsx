import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // aqui a gente está importando o arquivo de css global, tudo que mudar no index.css será atribuido ao site todo
import Home from "./pages/home";
import Loja from "./pages/loja";
import Blog from "./pages/blog";
import ErrorPage from "./pages/error-page";
import Contato from "./pages/contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,//Tela de página não encontrada
  },
  {
    path: "/loja",
    element: <Loja />,
    errorElement: <ErrorPage />,//Tela de página não encontrada
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,//Tela de página não encontrada
  },
  {
    path: "/contato",
    element: <Contato />,
    errorElement: <ErrorPage />,//Tela de página não encontrada
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
