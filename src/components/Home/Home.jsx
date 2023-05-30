import React from "react";
import HeroImage from "../../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import './Home.css'

const Home = () => {
  return (
    <div
      name="home"
      className="home"
    >
      <div className="home-container">
        <div className="heroText-container">
          <h2>Full Stack Developer JR</h2>
          <p>Récemment diplômé en tant que Développeur Web. J'apprécie créer des sites et applications avec React, CSS, Node et JavaScript.</p>
          <div className="btn">
            <Link to="portfolio"  className="group">
              <span>Portfolio</span>
              <span>
                <MdOutlineKeyboardArrowRight className="arrow" />
              </span>
            </Link>
          </div>
        </div>

        <div className="heroImg-container">
          <img src={HeroImage} alt="my profile"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
