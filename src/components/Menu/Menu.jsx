import { menuData } from "../../menuData";
import "./Menu.css";
import { useState } from "react";

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="menu-container">
      <div className="category-buttons">
        {menuData.map((categoryData) => (
          <button
            key={categoryData.category}
            onClick={() => handleCategoryClick(categoryData.category)}
            className={selectedCategory === categoryData.category ? "active" : ""}
          >
            {categoryData.category}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Име на продукт</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {selectedCategory &&
            menuData
              .find((categoryData) => categoryData.category === selectedCategory)
              ?.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name} {item.description ? `${item.description}` : ''}</td>
                  <td>{item.price}ден.</td>
                </tr>
              ))}
        </tbody>
      </table>
    </section>
  );
};
