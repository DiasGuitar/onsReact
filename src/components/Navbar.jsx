import React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/normalize.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "../assets/fonts/flaticon/flaticon.css";
import "../assets/fonts/fontawesome/css/all.min.css";

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProductsDropdown = () =>
    setProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleLanguageDropdown = () =>
    setLanguageDropdownOpen(!isLanguageDropdownOpen);

  // Переводы
  const translations = {
    en: {
      products: "Products",
      articles: "Articles",
      recipes: "Recipes",
      sustainability: "Sustainability",
      authentication: "Authentication",
      contactUs: "Contact Us",
      shopNow: "Shop Now",
    },
    th: {
      products: "ผลิตภัณฑ์",
      articles: "บทความ",
      recipes: "สูตรอาหาร",
      sustainability: "ความยั่งยืน",
      authentication: "การตรวจสอบ",
      contactUs: "ติดต่อเรา",
      shopNow: "ช้อปเลย",
    },
    vi: {
      products: "Sản phẩm",
      articles: "Bài viết",
      recipes: "Công thức",
      sustainability: "Bền vững",
      authentication: "Xác thực",
      contactUs: "Liên hệ",
      shopNow: "Mua ngay",
    },
    id: {
      products: "Produk",
      articles: "Artikel",
      recipes: "Resep",
      sustainability: "Keberlanjutan",
      authentication: "Otentikasi",
      contactUs: "Hubungi Kami",
      shopNow: "Belanja Sekarang",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <header className="main-header">
      <div className="navigation-wrap start-header start-style">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/home.html">
                  <img src="/assets/images/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarSupportedContent"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isMenuOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    {/* Products Dropdown */}
                    <li
                      className={`nav-item dropdown ${
                        isProductsDropdownOpen ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={isProductsDropdownOpen}
                        onClick={toggleProductsDropdown}
                      >
                        {t.products}
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          isProductsDropdownOpen ? "show" : ""
                        }`}
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="/gold-standard-whey.html"
                          >
                            100% Gold Standard Whey
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/gold-standard-isolate.html"
                          >
                            100% Gold Standard Isolate
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/serious-mass.html">
                            Serious Mass
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/amino-energy.html"
                          >
                            Energy & Amino Acids
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/bcaa-boost.html">
                            BCAA BOOST
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Other Menu Items */}
                    <li className="nav-item">
                      <a className="nav-link" href="/articles">
                        {t.articles}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/recipes">
                        {t.recipes}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sustainability">
                        {t.sustainability}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/authentication">
                        {t.authentication}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact-us">
                        {t.contactUs}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link shop-now-btn"
                        href="/find-a-retailer.html"
                      >
                        {t.shopNow}
                      </a>
                    </li>

                    {/* Language Dropdown */}
                    <li
  className={`nav-item dropdown languages ${
    isLanguageDropdownOpen ? "show" : ""
  }`}
>
  <a
    className="nav-link dropdown-toggle"
    href="#"
    role="button"
    aria-haspopup="true"
    aria-expanded={isLanguageDropdownOpen}
    onClick={toggleLanguageDropdown}
  >
    <span className="flag-icon">
      <img src="/assets/images/flags/SG.jpg" alt="SG Flag" />
    </span>
    <span className="text">Singapore</span>
  </a>
  <ul
    className={`dropdown-menu dropdown-menu-right ${
      isLanguageDropdownOpen ? "show" : ""
    }`}
  >
    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("en");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/SG.jpg" alt="SG Flag" />
        </span>
        <span className="text">Singapore</span>
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("en");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/MY.jpg" alt="MY Flag" />
        </span>
        <span className="text">Malaysia</span>
      </button>
    </li>
    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("en");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/PH.jpg" alt="PH Flag" />
        </span>
        <span className="text">Philippines</span>
      </button>
    </li>
    <li className="has-submenu">
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("th");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/TH.jpg" alt="TH Flag" />
        </span>
        <span className="text">Thailand</span>
      </button>
      <ul className="submenu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("th");
            }}
          >
            ไทย
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("en");
            }}
          >
            English
          </button>
        </li>
      </ul>
    </li>
    <li className="has-submenu">
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("vi");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/VN.jpg" alt="VN Flag" />
        </span>
        <span className="text">Vietnam</span>
      </button>
      <ul className="submenu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("vi");
            }}
          >
            Tiếng Việt
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("en");
            }}
          >
            English
          </button>
        </li>
      </ul>
    </li>
    <li className="has-submenu">
      <button
        className="dropdown-item"
        onClick={() => {
          setLanguage("id");
        }}
      >
        <span className="flag-icon">
          <img src="/assets/images/flags/ID.jpg" alt="ID Flag" />
        </span>
        <span className="text">Indonesia</span>
      </button>
      <ul className="submenu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("id");
            }}
          >
            Bahasa
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("en");
            }}
          >
            English
          </button>
        </li>
      </ul>
    </li>
  </ul>
</li>


                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
