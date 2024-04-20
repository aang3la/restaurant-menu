import food from "../../assets/food.jpg";
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
          <img src={food} alt="recommended-food-img1" />
          <p>Јадење 1</p>
        </li>
        <li className="food-item">
          <img src={food} alt="recommended-food-img2" />
          <p>Јадење 2</p>
        </li>
        <li className="food-item">
          <img src={food} alt="recommended-food-img3" />
          <p>Јадење 3</p>
        </li>
      </ul>
    </section>
  );
};
