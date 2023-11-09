import React from "react";

// import { Container } from './styles';

function Contato() {
  const pageNumber = 2;
  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Contatos da loja</h1>
      <p>
        retornar ao <a href="/">menu</a>
      </p>
    </div>
  );
}

export default Contato;
