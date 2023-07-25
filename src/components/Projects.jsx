import React from "react";
import Particle from "./Particle";
import img19 from "../../src/assets/img-19.png";
import img18 from "../../src/assets/img-18.png";
import img20 from "../../src/assets/img-20.png";
import img34 from "../../src/assets/img-34.png";

const Projects = () => {
  return (
    <>
      <Particle />
      <div className="project-page">
        <div className="project-head">
          <h1>PROJECTS</h1>
        </div>
        <div className="projects">
          <div className="project">
            <img src={img18} />
            <div class="project__content">
              <p class="project__title">React Crypto Dashboard</p>
              <p class="project__description">
                This dashboard is made using React functional components
                (hooks), useState, and useEffect to make our code more
                understandable and readable. This site is 20% faster than any
                normal JavaScript site. The site renders data from an API and
                utilizes external libraries like ApexCharts to display data in
                graphs.
              </p>
              <button class="Btn">
                <a
                  href="https://glittery-dodol-70c1c6.netlify.app/"
                  target="_blank"
                >
                  See Project
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img src={img19} />
            <div class="project__content">
              <p class="project__title">Next.js Dashboard</p>
              <p class="project__description">
                I have used the modern version of Next.js, which includes
                server-side rendering (SSR) components that greatly benefit SEO.
                Additionally, I have incorporated the Chart.js external library
                and implemented various other functionalities of Next.js and
                React.js.
              </p>
              <button class="Btn">
                <a
                  href="https://comforting-sprinkles-35238d.netlify.app/"
                  target="_blank"
                >
                  See Project
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img src={img20} />
            <div class="project__content">
              <p class="project__title">Mapty-APP</p>
              <p class="project__description">
                In this app, I have used HTML, CSS, and JavaScript, along with
                the Leaflet library, to integrate a map API that displays and
                tracks the activity of cycling and running between different
                locations. To obtain the user's current location, the app
                utilizes the Geolocation API.
              </p>
              <button class="Btn">
                <a
                  href="https://majestic-gnome-f27988.netlify.app/"
                  target="_blank"
                >
                  See Project
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <img src={img34} />
            <div class="project__content">
              <p class="project__title">Previous Portfolio</p>
              <p class="project__description">
                This is my Previous Portfolio and all the previous work which i
                have done before learning React.
              </p>
              <button class="Btn">
                <a href="https://saif-portfolio-2.netlify.app/" target="_blank">
                  See Project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
