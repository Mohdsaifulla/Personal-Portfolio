import React from "react";
import {
  AlignJustify,
  AlignRight,
  Home,
  Monitor,
  BookOpen,
  Trophy,
  Contact,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>
            Copyright <span className="heart">&#169;</span> 2023 Made With
            <span className="heart"> ♥️ </span> By Saif
          </p>
          <div className="social-footer">
            <ul className="social-footer-desktop">
              <li>
                <a
                  href="https://www.instagram.com/i_am_mo_saif_/"
                  target="_blank"
                >
                  <Instagram className="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohd-saifulla-336633262/"
                  target="_blank"
                >
                  <Linkedin className="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Mohdsaifulla" target="_blank">
                  <Github className="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
