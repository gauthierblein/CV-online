import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import './Navbar.css'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "à propos",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "compétences",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="navbar-container">
      <div>
        <h1 className="navbar-logo">Gau</h1>
      </div>

      <ul className="navbar-menu">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="navbar-icons"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="navResponsive-container">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="navResponsive-links"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
