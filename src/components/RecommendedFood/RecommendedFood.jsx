import riba from "../../assets/riba_spanjak.jpg";
import turlitava from "../../assets/turlitava.jpg";
import daska from "../../assets/daska.jpg";
import "./RecommendedFood.css";
import { Link } from "react-scroll";

export const RecommendedFood = () => {
  return (
    <section className="recommended-food-container">
      <div className="headline-part">
        <h1>Препорака на шефот</h1>
        <Link to="menu"><button id="menu-btn">ВИДИ ГО ЦЕЛО МЕНИ</button></Link>
      </div>
      <ul className="recommended-food-imgs">
        <li className="food-item">
          <img src={riba} alt="recommended-food-img1" />
          <h4>Риба по избор + спањаќ</h4>
          <p>Црвена пастрмка во комбинација со ориз или спањаќ.</p>
        </li>
        <li className="food-item">
          <img src={turlitava} alt="recommended-food-img2" />
          <h4>Турлитава</h4>
          <p>Мешавина од грашок, боранија, брокула, модар патлиџан, тиквица, пиперка, морков, домат и компир.</p>
        </li>
        <li className="food-item">
          <img src={daska} alt="recommended-food-img3" />
          <h4>Мешана даска</h4>
          <p>Даска од мешано месо и помфрит. Препорачано месо: увијач, ражнич и уштипци.</p>
        </li>
      </ul>
    </section>
  );
};
