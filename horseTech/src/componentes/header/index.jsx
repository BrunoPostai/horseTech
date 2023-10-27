import React, { useState } from "react";
import styles from "./styles.header.css";

function Header(props) {
  const [navItems, setNavItems] = useState([
    { text: "Home", link: "/" },
    { text: "Loja", link: "/loja" },
    { text: "Blog", link: "/blog" },
    { text: "Contato", link: "/contato" },
  ]);

  const [store, setStore] = useState([
    { text: "Selas", link: "/" },
    { text: "Culotes", link: "/" },
    { text: "Capacetes", link: "/" },
    { text: "Coletes", link: "/" },
    { text: "Botas", link: "/" },
  ]);

  return (
    <div className={styles.section}>
      <div className="header">
        <div className="background-black-left">
          <div className="logo">
            <img className="logo" src="/logo.png" alt="" />
          </div>
          <div className="texto">
            <p className="boutique">HORSE-BOUTIQUE</p>
          </div>
        </div>
        <div className="background-black-right">
          <div className="header-top">
            <nav className="navTop">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="background-gray">
        <div className="texto-gray">
          <p className="store">STORE</p>
        </div>
        <nav className="navBottom">
          {store.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
          <button>
            <a>PERSONALIZAR</a>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
