import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // aqui a gente está importando o arquivo de css global, tudo que mudar no index.css será atribuido ao site todo
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,//Tela de página não encontrada
  },
  {
    path: "/produtos",
    element: <ErrorPage />,//substituir essa parte por uma página válida
  },
  {
    path: "/contato",
    element: <ErrorPage />,//substituir essa parte por uma página válida
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
