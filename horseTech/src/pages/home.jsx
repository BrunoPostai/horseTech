import React from "react";
import { Card } from "../componentes/card/index";
import sela from "/sela1.png";
function Home() {
  return (
    <>
      <div className="header">
        <div className="logo-name">
          <img className="logo" src="/logo.png" alt="" />          
        </div>
        <div>
          <div className="background-black">
          <p className="boutique">HORSE-BOUTIQUE</p>
          <p className="store">STORE</p>
            <div className="header-top">
            
              <nav className="navTop">
                
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Loja</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </nav>
            </div>
          </div>
          <div className="background-grey">
            <div className="header-bottom">
              <nav className="navBottom">
                <li>
                  <a href="#">Selas</a>
                </li>
                <li>
                  <a href="#">Culotes</a>
                </li>
                <li>
                  <a href="#">Capacetes</a>
                </li>
                <li>
                  <a href="#">Coletes</a>
                </li>
                <li>
                  <a href="#">Botas</a>
                </li>
                <li>
                  <button>
                    <a>PERSONALIZAR</a>
                  </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Card name="primeiro"></Card>
      <Card sela={sela}></Card>
    </>
  );
}

export default Home;
