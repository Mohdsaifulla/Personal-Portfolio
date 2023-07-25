import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
  const handleOpen = () => {
    setIsopen(!isOpen);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setIsopen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <Link to="/">
              <span>M</span>ohd
              <span> S</span>aifulla
            </Link>
          </h2>
        </div>

        <div
          ref={mobileMenuRef}
          className={isOpen ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <Home />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills">
                <span>
                  <Monitor />
                </span>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span>
                  <BookOpen />
                </span>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/achievements">
                <span>
                  <Trophy />
                </span>
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>
                  <Contact />
                </span>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
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
          <div ref={hamburgerMenuRef} className="hamburger-menu">
            <a href="#" onClick={handleOpen}>
              <AlignJustify style={{ color: "blue" }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
