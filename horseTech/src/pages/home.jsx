import React from 'react';
import { Card } from '../componentes/card/index';
import sela from "/sela1.png";
import '../App.css';

function Home() {
    return (
        <>
          <Card name="primeiro"></Card>
          <Card sela={sela}></Card>
        </>
      )
    }

export default Home;