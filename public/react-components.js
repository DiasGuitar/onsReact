// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = React.useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProductsDropdown = () =>
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

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
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
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
                        Products
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
                        Articles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/recipes">
                        Recipes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sustainability">
                        Sustainability
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/authentication">
                        Authentication
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact-us">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link shop-now-btn"
                        href="/find-a-retailer.html"
                      >
                        <span className="icon" />
                        <span className="text">Shop Now</span>
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
                          <img
                            src="/assets/images/flags/SG.jpg"
                            alt="SG Flag"
                          />
                        </span>
                        <span className="text">Singapore</span>
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-right ${
                          isLanguageDropdownOpen ? "show" : ""
                        }`}
                      >
                        <li>
                          <a className="dropdown-item" href="SG">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/SG.jpg"
                                alt="SG Flag"
                              />
                            </span>
                            <span className="text">Singapore</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="MY">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/MY.jpg"
                                alt="MY Flag"
                              />
                            </span>
                            <span className="text">Malaysia</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="PH">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/PH.jpg"
                                alt="PH Flag"
                              />
                            </span>
                            <span className="text">Philippines</span>
                          </a>
                        </li>
                        <li className="has-submenu">
                          <a className="dropdown-item" href="TH">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/TH.jpg"
                                alt="TH Flag"
                              />
                            </span>
                            <span className="text">Thailand</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="TH/TH">ไทย</a>
                            </li>
                            <li>
                              <a href="TH/EN">English</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu">
                          <a className="dropdown-item" href="VN">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/VN.jpg"
                                alt="VN Flag"
                              />
                            </span>
                            <span className="text">Vietnam</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="VN/VI">Tiếng Việt</a>
                            </li>
                            <li>
                              <a href="VN/EN">English</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu">
                          <a className="dropdown-item" href="ID">
                            <span className="flag-icon">
                              <img
                                src="/assets/images/flags/ID.jpg"
                                alt="ID Flag"
                              />
                            </span>
                            <span className="text">Indonesia</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="ID/ID">Bahasa</a>
                            </li>
                            <li>
                              <a href="ID/EN">English</a>
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

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="col-12">
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/OptimumNutritionIndonesia"><i className="flaticon-facebook" /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/optimumnutrition"><i className="flaticon-youtube" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/optimumnutrition.id/"><i className="flaticon-instagram" /></a>
          </li>
        </ul>
        <div className="footer-links text-center">
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="text-box">
          <p className="copyright-text">
            © All Rights Reserved by Optimum Nutrition
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// ShopNow Component
const ShopNow = () => (
  <section className="go-to-retailer">
    <h3>FIND A RETAILER</h3>
    <a href="/find-a-retailer.html" className="btn btn-with-border">
      Shop Now
    </a>
  </section>
);

// Render Components
ReactDOM.render(<Navbar />, document.getElementById("navbar-root"));
ReactDOM.render(<ShopNow />, document.getElementById("shopnow-root"));
ReactDOM.render(<Footer />, document.getElementById("footer-root"));
