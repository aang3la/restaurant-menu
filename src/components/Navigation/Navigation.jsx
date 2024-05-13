import { useState } from "react";
import businessLogo from "../../assets/logo.png";
import "./Navigation.css";
import { Link } from "react-scroll";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Navigation">
      <div className="logo-container">
        <img src={businessLogo} alt="logo" />
      </div>

      <nav className={`navigation-container ${isMenuOpen ? "open" : ""}`}>
        <div className="hamburger-menu" onClick={ toggleMenu }>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className="nav-list">
          <li className="nav-element">
            <Link to="hero-section" onClick={toggleMenu}>ДОМА</Link>
          </li>
          <li className="nav-element">
            <Link to="menu" onClick={toggleMenu}>МЕНИ</Link>
          </li>
          <li className="nav-element">
            <Link to="about" onClick={toggleMenu}>ЗА НАС</Link>
          </li>
          <li className="nav-element">
            <Link to="contact" onClick={toggleMenu}>КОНТАКТ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
