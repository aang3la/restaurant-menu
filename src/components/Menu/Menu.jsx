import { menuData } from "../../menuData";
import "./Menu.css";
import { useState } from "react";

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Доручек");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="menu-container" id="menu">
      <div className="category-buttons">
        {menuData.map((categoryData) => (
          <button
            key={categoryData.category}
            onClick={() => handleCategoryClick(categoryData.category)}
            className={selectedCategory === categoryData.category ? "active" : ""}
          >
            <img id="category-img" src={categoryData.img} />
            {categoryData.category}
          </button>
        ))}
      </div>
      <div className="menu-items-grid">
        {selectedCategory &&
          menuData
            .find((categoryData) => categoryData.category === selectedCategory)
            ?.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div><b>{item.name}</b></div>
                <div className="item-desc">{item.description ? `${item.description}` : ""}</div>
                <div id="menu-price">{item.price}ден.</div>
              </div>
            ))}
      </div>
    </section>
  );
};
