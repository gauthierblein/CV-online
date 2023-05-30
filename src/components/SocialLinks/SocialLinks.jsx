import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import './SocialLinks.css'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gauthierblein",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:bleingauthier@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={30} /> 
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div className=" top-[35%] left-0 fixed sociallinks">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id} >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
