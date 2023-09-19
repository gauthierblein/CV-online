import React from "react";
// Images
import gbtrainer from "../../assets/portfolio/gbTrainerv2.png";
import fitClub from "../../assets/portfolio/FitClub.png";
import ohmyfood from "../../assets/portfolio/ohmyfood.png";
import renaissens from "../../assets/portfolio/Renaissens.png";
import airdropHunter from "../../assets/portfolio/airdropHunter.png"
import eFitShop from "../../assets/portfolio/eFitShopPic.png"
import './Portfolio.css'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gbtrainer,
      demo: 'https://gbtrainer.eu/',
      code: 'https://github.com/gauthierblein/gbTrainer-v2',
      description: "HTML, CSS, React"
    },
    {
      id: 2,
      src: fitClub,
      demo: 'https://fitclub-85167.web.app/',
      code: 'https://github.com/gauthierblein/FitClub-Starter',
      description: "HTML, CSS, React"
    },
    {
      id: 3,
      src: ohmyfood,
      demo: 'https://ohmyfood23.netlify.app/',
      code: 'https://github.com/gauthierblein/ohmyfood-react',
      description: "HTML, SASS, React"
    },
    {
      id: 4,
      src: renaissens,
      demo: 'https://renaissens.netlify.app/',
      code: 'https://github.com/gauthierblein/Renaissens',
      description: "HTML, CSS, React, NodeJS, Express"
    },
    {
      id: 5,
      src: airdropHunter,
      demo: 'https://airdrophunterfastlife.netlify.app/',
      code: 'https://github.com/gauthierblein/airdropHunter',
      description: "HTML, CSS, React, NodeJS, Express"
    },
    {
      id: 6,
      src: eFitShop,
      demo: 'https://efitshop-gbdev.netlify.app/',
      code: 'https://github.com/gauthierblein/eFitShop',
      description: "CSS, React, Express, Redux Toolkit, Stripe"
    },



  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <p>Voici quelques projets que j'ai réalisé dernièrement</p>

        <div className="projects-container">
          {portfolios.map(({ id, src, demo, code, description }) => (
            <div key={id} className="projects">
              <img src={src} alt=""/>
              <div className="btn-container">
                <a className="portfolio-btn" href={demo}>Demo</a>
                <a className="portfolio-btn" href={code}>Code</a>
              </div>
              <div className="description">
                  <p><b>Outils</b></p>
                  <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
