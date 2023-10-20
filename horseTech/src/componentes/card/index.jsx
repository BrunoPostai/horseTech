import React from "react";
import sela from "/sela1.png";
import styles from './styles.module.css';

export function Card(props) {
  return (
    <div>
      { <img src={props.sela} alt="" /> }
      <div className={styles.componente}>{props.name}</div>
    </div>
  );
}


