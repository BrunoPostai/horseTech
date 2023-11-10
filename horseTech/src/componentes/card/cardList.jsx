import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

function CardList(props) {
  const items = props.items;
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.componente}>
          <img src={item.img} alt="Imagem da sela" className={styles.sela} />
          <div className={styles.container}>
            <div className={styles.text}>
              <h2>{item.title}</h2>
              <p>{item.info.desc}</p>
              <p>{item.info.price}</p>
            </div>
            <div className={styles.arrow}>
              <Icon icon="fluent:ios-arrow-24-filled" rotate={2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
