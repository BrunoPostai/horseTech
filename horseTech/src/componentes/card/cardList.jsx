import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

function CardList() {
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
