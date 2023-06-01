import React from "react";
import gbtrainer from "../../assets/portfolio/gbtrainer.png";
import fitClub from "../../assets/portfolio/FitClub.png";
import './Portfolio.css'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gbtrainer,
      demo: 'https://gbtrainer.eu/',
      code: 'https://github.com/gauthierblein/CV-online'
    },
    {
      id: 2,
      src: fitClub,
      demo: 'https://fitclub-85167.web.app/',
      code: 'https://github.com/gauthierblein/FitClub-Starter'
    },


  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <p>Voici quelques projets que j'ai réalisé dernièrement</p>

        <div className="projects-container">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="projects">
              <img src={src} alt=""/>
              <div className="btn-container">
                <a className="portfolio-btn" href={demo}>Demo</a>
                <a className="portfolio-btn" href={code}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
