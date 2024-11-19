import React from "react";

const Sitemap = () => {
  return (
    <section className="sitemap-section" style={{ paddingTop: 90, marginBottom: 90 }}>
      <div className="sitemap-container">
        <div
          className="bg-image"
          style={{
            backgroundImage: "url(https://optimumnutritionsea.com/frontend/images/backgrounds/stocks-bg.jpg)",
            paddingTop: 500,
          }}
        />
        <div className="sec-title">
          <h2>Sitemap</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="sitemap-links">
                <div className="title">
                  <h3>Products</h3>
                </div>
                <ul>
                  <li>
                    <a href="../products/gold-standard-whey.html">
                      100% Gold Standard Whey
                    </a>
                  </li>
                  <li>
                    <a href="../products/gold-standard-isolate.html">
                      100% Gold Standard Isolate
                    </a>
                  </li>
                  <li>
                    <a href="../products/serious-mass.html">Serious Mass</a>
                  </li>
                  <li>
                    <a href="../products/amino-energy.html">
                      Energy &amp; Amino Acids
                    </a>
                  </li>
                  <li>
                    <a href="../products/bcaa-boost.html">BCAA BOOST</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sitemap-links">
                <div className="title">
                  <h3>Other</h3>
                </div>
                <ul>
                  <li>
                    <a href="../pages/authentication.html">Authentication</a>
                  </li>
                  <li>
                    <a href="../pages/find-a-retailer.html">Shop Now</a>
                  </li>
                  <li>
                    <a href="../pages/articles.html">Articles</a>
                  </li>
                  <li>
                    <a href="../pages/recipes.html">Recipes</a>
                  </li>
                  <li>
                    <a href="../pages/contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
