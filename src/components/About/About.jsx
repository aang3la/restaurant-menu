import "./About.css";
import aboutUs_img from "../../assets/hero-img.png";

export const About = () => {
  return (
    <section className="about-container" id="about">
        <div className="about-section">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nemo rerum dolorum quibusdam quos quia, non accusamus nulla atque delectus minus debitis blanditiis sapiente, voluptate beatae, deleniti placeat molestiae saepe.</p>
        </div>
        <div>
            <img id="about-is-img" src={aboutUs_img} />
        </div>
    </section>
  )
}
