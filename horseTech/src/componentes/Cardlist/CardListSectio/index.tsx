import React from "react";
import "./styles.module.css";

interface BestBugsCardProps {
  title: string;
  image: string;
  technologies: string[];
  link: string;
}

const CardListSection: React.FC<BestBugsCardProps> = ({
  title,
  image,
  technologies,
  link,
}) => {
  const stackIcons = [
    {
      name: "typescript",
      width: "25px",
      IconName: "akar-icons:typescript-fill",
    },
    {
      name: "javascript",
      width: "25px",
      IconName: "simple-icons:javascript",
    },
    {
      name: "stack",
      width: "25px",
      IconName: "cib:stackoverflow",
    },
    {
      name: "react",
      width: "30px",
      IconName: "ri:reactjs-fill",
    },
    {
      name: "css",
      width: "25px",
      IconName: "akar-icons:css-fill",
    },
    {
      name: "language",
      width: "25px",
      IconName: "cil:language",
    },
  ];
  return (
    <a href={link} target="_blank">
      <div className="container-show-case" style={{ backgroundColor:'blue'}}>
        <div className="title-container-card">
          <span className="showcase-title">{title}</span>
        </div>
        <div className="stack-used-bar">
            {/* Mapear stack icons baseado nos icones selecionados */}
        </div>
      </div>
    </a>
  );
};

export default CardListSection;
