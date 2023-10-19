import React from "react";
import sela from "../../public/sela1.png";

import  styles from './style.css';

export function Card() {
  return (
    <div className={styles.style}>
      <img src={sela} alt="" />
      <div style={{backgroundColor:"red", width:"100px", height:"100px"}}></div>
    </div>
  );
}


