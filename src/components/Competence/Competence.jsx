import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png"
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import reduxToolkit from "../../assets/reduxToolkit.jpeg"
import nodeJS from "../../assets/node.png"
import express from "../../assets/expressApp.png"
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
      src: sass,
      title: "Sass",
    },

    {
      id: 4,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
    },
    {
      id: 6,
      src: reduxToolkit,
      title: "Redux Toolkit",
    },
    {
      id: 7,
      src: nodeJS,
      title: "NodeJS",
    },
    {
      id: 8,
      src: express,
      title: "Express",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
    },

  ];
  if (!techs) return(null)
  else {

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
}

export default Experience;
