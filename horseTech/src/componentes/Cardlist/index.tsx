import React, { useState } from "react";
import CardListSection from "./CardListSectio";
import { BestBugsMock } from "./CardList.mock";
import './styles.module.css';

const BestBugsContainer: React.FC = () => {
  const [selected, setSelected] = useState(String);
  return (
    <div className={'showcase_container'}>
      <div className={'buttons_container'}>
        <button>Seção de tutoriais(tutu)</button>
        
        <button>Seção de bugs(solved)</button>
        
        <button>Seção de stack (stack)</button>
      </div>
      <div className={'card_wraper'}>
        {BestBugsMock().map((item, key) => (
          <CardListSection
            link={item.link}
            technologies={item.technologies}
            key={key}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestBugsContainer;
