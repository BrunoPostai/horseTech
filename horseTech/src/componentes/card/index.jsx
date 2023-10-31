import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

export function Card(props) {
  return (
    <div className={styles.componente}>
      <img
        src="/public/sela1.png"
        alt="imagem da sela"
        className={styles.sela}
      />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Titulo</h2>
          <p>Descricao</p>
        </div>
        <div className={styles.arrow}>
          <Icon icon="fluent:ios-arrow-24-filled" rotate={2} />
        </div>
      </div>
    </div>
  );
}
