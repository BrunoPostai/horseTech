import React, { useState } from "react";

// import { Container } from './styles';

function Contato() {
  const pageNumber = 3;
  const [names, setNames] = React.useState();
  const pagina = `${pageNumber}`; 
  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {console.log(data); setNames(data.results.map((item) => (item.name)))});
  }, []);
  
  return (
    <div>
      <h1>Contatos da loja</h1>
      <button onClick={() => console.log(names)}>CLIQUE AQUI</button>
      <p>
        retornar ao <a href="/">menu</a>
      </p>
    </div>
  );
}

export default Contato;
