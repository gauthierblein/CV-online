import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";


import './Competence.css'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
    },

  ];

  return (
    <div name="compétences" className="experience">
      <div className="experience-container">
        <h2>Compétences</h2>
        <p>Voici les outils que j'utilise régulièrement</p>

        <div className="techs-container">
          {techs.map(({ id, src, title}) => (
            <div key={id} className="techs">
              <img src={src} alt=""/>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
