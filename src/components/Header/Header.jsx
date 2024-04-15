import businessLogo from "../../assets/businessLogo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header">
      <div className="logo-container">
        <img src={businessLogo} alt="logo" />
      </div>
      <nav className="navigation-container">
        <ul className="nav-list">
            <li className="nav-element">ДОМА</li>
            <li className="nav-element">ЗА НАС</li>
            <li className="nav-element">КОНТАКТ</li>
        </ul>
      </nav>
    </header>
  );
};
