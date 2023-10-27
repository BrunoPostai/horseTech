import React, { useEffect, useMemo, useState, useRef } from "react";
import { Card } from "../componentes/card/index";
import Header from "../componentes/header";

function Home() {
  const [count, setCount] = useState(Number);

  useEffect(() => {
    if(count > 0){
      alert("Count foi alterado");
    }
    
  }, [count]);

  const inputRef = useRef();
  return (
    <>
      <Header></Header>
    </>
  );
}

export default Home;
