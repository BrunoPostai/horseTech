import React, { useState } from "react";
import CardListSection from "./CardListSectio";
import { BestBugsMock } from "./CardList.mock";
import './styles.module.css';

const BestBugsContainer: React.FC = () => {
  const [selected, setSelected] = useState(String);
  console.log(selected);
  const filteredMock = () => {
    if (selected) {
      return BestBugsMock().filter((item) => item.filter.includes(selected));
    } else {
      return BestBugsMock();
    }
  };
  return (
    <div className={'showcase_container'}>
      <div className={'buttons_container'}>
        <button onClick={() => setSelected("tuto")}>Seção de tutoriais(tuto)</button>
        
        <button onClick={() => setSelected("solved")}>Seção de bugs(solved)</button>
        
        <button onClick={() => setSelected("stack")}>Seção de stack (stack)</button>
      </div>
      
      <div className={'card_wraper'}>
        {filteredMock().map((item, key) => (
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
