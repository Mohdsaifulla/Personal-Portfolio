import { useState, useEffect } from "react";
import Particle from "./Particle";

const Home = () => {
  return (
    <>
      <div className="home">
        <Particle />
        <div className="home-content">
          <div className="all-content">
            <div className="my-name">
              <h1>
                <span className="typewrite">Hi, I'm saif</span>
              </h1>
            </div>
            <div className="home-about">
              <p>
                I am a frontend developer, Teach stack used in this Portfolio is
                #React, #React particle, #Framer Motion, #Email.js, #React
                toaster etc.
              </p>
            </div>
            <button class="btn-home">
              <a
                href="https://drive.google.com/file/d/1knH71-d-muH22ZLjk9iBN2zKeB7MU6yQ/view?usp=sharing"
                target="_blank"
              >
                RESUME
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
