import React from "react";
import Header from "../componentes/header/index";
import { Card } from "../componentes/card/index";

function Loja() {
  return (
    <div>
      <Header></Header>
      <Card></Card>
      <h1>Pagina da loja</h1>
      <p>retornar ao <a href="/">menu</a></p>
    </div>
  );
}

export default Loja;
