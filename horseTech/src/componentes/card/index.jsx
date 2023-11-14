import React from "react";
import CardList from "./cardList";


export function Card() {
  const items = [
    {
      img: "/sela1.png",
      title: "Sela 1",
      info: {
        price: 10,
        desc: "sela de couro preto",
      },
    },
    {
      img: "/sela1.png",
      title: "Sela 2",
      info: {
        price: 20,
        desc: "sela de couro",
      },
    },
  ];
  return (<CardList item={items}></CardList>);
}

export default Card;