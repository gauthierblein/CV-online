import React from "react";
import './About.css'

const About = () => {
  return (
    <div
      name="à propos"
      className="about"
    >
      <div className="about-container">
        <h2>À propos</h2>
        <p className="text-xl mt-20">
          Diplômé en management du sport, je ne m'intéresse au développement qu'à partir de 2021, par l'intermédiaire d'amis. Je décide de commencer une formation de développeur web chez OpenClassRooms, que j'effectue en parallèle de mes activités professionnelles dans le domaine du sport. Je termine ma formation en janvier 2023, puis continue de me former de mon côté, en travaillant sur différents projets, afin de gagner en expérience et en compétence.
        </p>
        <br />
        <p className="text-xl">
          Je suis convaincu que l'univers du numérique ne vas pas à en opposition avec les métiers de la santé, du sport, de la nutrition et de la nature. Je pense qu'au contraire il peut y apporter des opportunités, des évolutions profitables à tous, et aussi rapprocher les gens. Je souhaite donc m'y consacrer pleinement et être acteur de ce changement.
        </p>
      </div>
    </div>
  );
};

export default About;
