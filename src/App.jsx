import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./HomePage/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Sitemap from "./pages/Sitemap";
import ContactUs from "./pages/ContactUs";
import Authentication from "./pages/Authentication";
import Sustainability from "./pages/Sustainability";
import FindARetailer from "./pages/FindARetailer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
      <Router>
        <div>
          <Navbar language={language} setLanguage={setLanguage}/>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:pageName" element={<Article />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:pageName" element={<Recipe />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/find-a-retailer" element={<FindARetailer />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
  );
};

export default App;
