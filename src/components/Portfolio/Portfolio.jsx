import React from "react";
import gbtrainer from "../../assets/portfolio/gbtrainer.png";
import './Portfolio.css'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gbtrainer,
    },

  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <p>Voici quelques projets que j'ai réalisé dernièrement</p>

        <div className="projects-container">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="projects">
              <img src={src} alt=""/>
              <div className="btn-container">
                <a className="portfolio-btn" href={'https://gbtrainer.eu/'}>Demo</a>
                <button className="portfolio-btn">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
