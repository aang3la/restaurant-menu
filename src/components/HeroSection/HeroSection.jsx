import "./HeroSection.css";
import businessLogo from "../../assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="Hero-section" id="hero-section">
      <img src={businessLogo} alt="logo" />
      <h1>Добредојде во нашиот традиционален ресторан!</h1>
    </section>
  );
};
