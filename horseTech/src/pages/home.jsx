import React, { useEffect, useMemo, useState, useRef } from "react";
import { Card } from "../componentes/card/index";
import Header from "../componentes/header";

function Home() {

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/1/',{method:"GET"})
    .then(response => response.json())
    .then(data => console.log(data))    
  }, []);

  return (
    <>
      <Header></Header>
      <Card></Card>
    </>
  );
}

export default Home;
