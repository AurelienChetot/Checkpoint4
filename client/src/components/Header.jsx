import { useState, useEffect } from "react";
import axios from "axios";

import LOGO from "../assets/svg/logoyourmarket.svg";
import USER from "../assets/svg/user.svg";
import MENU from "../assets/svg/menu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3310/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value, 10);
    setSelectedCategory(categoryId);
  };

  const handleSubcategoryClick = () => {
    closeMenu();
  };

  return (
    <div className="header-container">
      <img className="logo-market-style" src={LOGO} alt="Logo-Your-Market" />
      <div className="menu-container">
        <img className="logo-user-style" src={USER} alt="icone-user" />
        <div className={menuOpen ? "sidenav active" : "sidenav"}>
          <button type="button" className="close" onClick={toggleMenu}>
            <span className="cursor-menu-close">❌</span>
          </button>
          <div>
            <select
              className="container-list"
              value={selectedCategory || ""}
              onChange={handleCategoryChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nom}
                </option>
              ))}
            </select>
            {/* Affichage des sous-catégories */}
            {selectedCategory &&
              categories.find((cat) => cat.id === selectedCategory)
                ?.souscategories && (
                <ul className="subcategories">
                  {categories
                    .find((cat) => cat.id === selectedCategory)
                    .souscategories.map((subcategory) => (
                      <li key={subcategory.id}>
                        <a
                          href={`/produits/${subcategory.id}`}
                          onClick={() => handleSubcategoryClick(subcategory.id)}
                        >
                          {subcategory.nom}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
          </div>
        </div>
        <button
          className="button-menu-style"
          type="button"
          onClick={toggleMenu}
        >
          <img className="logo-menu-style" src={MENU} alt="menu-burger" />
        </button>
      </div>
    </div>
  );
}

export default Header;
