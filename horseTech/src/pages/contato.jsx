import React, { useState } from "react";

// import { Container } from './styles';

function Contato() {
  const [inputValue, setInputValue] = useState();
  const [object, setObject] = useState(); 
  const pageNumber = 3;
  const [names, setNames] = React.useState();
  const pagina = `${pageNumber}`;
  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`, {
      method: "GET",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNames(data.results.map((item) => item.name));
        setObject(data.results[0]);
      });
  }, []);

  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" />
      <p>{inputValue}</p>
      <h1>
        {names
          ? names.filter((item) => item.includes(inputValue))
          : "Nao achei nada"}
      </h1>
      <button onClick={() => console.log(object)}>CLIQUE AQUI</button>
        {object && Object.entries(object).map((item) => <p>{item[0]}:{item[1]}</p>)}
    </div>
  );
}

export default Contato;
