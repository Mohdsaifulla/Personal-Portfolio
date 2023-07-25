import React from "react";
import Particle from "./Particle";
import { motion } from "framer-motion";
import profile from "../../src/assets/img1.jpeg";
import img3 from "../../src/assets/img3.png";
import img4 from "../../src/assets/img4.png";
import img5 from "../../src/assets/img5.png";
import img6 from "../../src/assets/img6.png";
import img7 from "../../src/assets/img7.png";
import img28 from "../../src/assets/img28.png";
import img29 from "../../src/assets/img29.png";
import img30 from "../../src/assets/img30.png";
import img31 from "../../src/assets/img31.png";
import img32 from "../../src/assets/img32.png";
import img33 from "../../src/assets/img33.png";
const Skills = () => {
  return (
    <>
      <Particle />
      <div className="skills">
        <div className="head-skills">
          <h1>SKILLS</h1>
        </div>
        <div className="skill-content">
          <div className="profile">
            <img src={profile} />
          </div>
          <div className="skill-para">
            <p>
              Passionate Front-end Web Developer who want to explore and learn
              every tech stack. I have depth knowledge of React functional
              components like useEffect useRef useState etc and also learning
              Next.js for server side rendering to create fast and efficient web
              application.
            </p>
          </div>
          <div className="skill-para">
            <p>
              To make my foundation strong, I have gained a good command on
              various frontend technologies like HTML, CSS, JavaScript, ReactJs,
              Next.js, Bootstrap, Tailwind CSS, SASS, jQuery, and Figma for
              front-end development. I also want to learn Node.js and Express.js
              for back-end development, and MongoDB as the Database Management
              System.
            </p>
          </div>
        </div>
        <div className="tech-icons">
          <img className="iconsImage" src={img3} />
          <img className="iconsImage" src={img4} />
          <img className="iconsImage" src={img5} />
          <img className="iconsImage" src={img6} />
          <img className="iconsImage" src={img28} />
          <img className="iconsImage" src={img29} />
          <img className="iconsImage" src={img30} />
          <img className="iconsImage" src={img31} />
          <img className="iconsImage" src={img32} />
          <img className="iconsImage" src={img33} />
        </div>
      </div>
    </>
  );
};

export default Skills;
