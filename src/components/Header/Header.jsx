import businessLogo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="Header">
      <div className="logo-container">
        <img src={businessLogo} alt="logo" />
      </div>
      <nav className="navigation-container">
        <ul className="nav-list">
          <li className="nav-element">
            <Link to="hero-section">ДОМА</Link>
          </li>
          <li className="nav-element">
            <Link to="menu">МЕНИ</Link>
          </li>
          <li className="nav-element">
          <Link to="about">ЗА НАС</Link>
          </li>
          <li className="nav-element">КОНТАКТ</li>
        </ul>
      </nav>
    </header>
  );
};
