import React from "react";
import Particle from "./Particle";
import img9 from "../../src/assets/img-9.jpg";
import img10 from "../../src/assets/img-10.jpg";
import img11 from "../../src/assets/img-11.jpg";
import img12 from "../../src/assets/img-12.jpg";

const Achievements = () => {
  return (
    <>
      <Particle />
      <div className="achiev-head">
        <h1>ACHIEVEMENTS</h1>
      </div>
      <div className="achievements-container">
        <div class="card-container">
          <div class="card">
            <div class="img-content">
              <img src={img9} />
            </div>
            <div class="content">
              <p class="heading">HackerRank</p>
              <p>
                HackerRank offers a "Problem Solving (Basic)" certificate that
                covers fundamental topics in Data Structures and Algorithms
                (DSA). The certificate is obtained by solving various coding
                challenges related to array manipulation, string operations,
                searching, sorting, recursion, and other foundational
                algorithms.
              </p>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="img-content">
              <img src={img10} />
            </div>
            <div class="content">
              <p class="heading">FreeCodeCamp</p>
              <p>
                The FreeCodeCamp Responsive Web Development course on
                FreeCodeCamp.org provides an in-depth knowledge of web
                development, covering around 300 hours of course work. It
                encompasses all the essential topics of HTML and CSS.
              </p>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="img-content">
              <img src={img11} />
            </div>
            <div class="content">
              <p class="heading">FreeCodeCamp DSA</p>
              <p>
                The FreeCodeCamp JavaScript and Algorithms course provides a
                comprehensive curriculum that includes both basic and advanced
                levels of JavaScript, logical questions, and Data Structures and
                Algorithms (DSA) concepts. The course spans approximately 300
                hours of coursework, and it is designed to clear doubts and
                enhance understanding of JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="img-content">
              <img src={img12} />
            </div>
            <div class="content">
              <p class="heading">Udemy JavaScript</p>
              <p>
                The Udemy JavaScript Certification course is an excellent choice
                for honing my skills in the JavaScript language. This
                comprehensive course spans approximately 67 hours of content,
                providing in-depth knowledge and practical experience to take
                JavaScript proficiency to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
