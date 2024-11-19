import React from "react";
import "../assets/plugins/owl-carousel/dist/assets/owl.carousel.min.css";
import "../assets/plugins/owl-carousel/dist/assets/owl.theme.default.min.css";
import "../assets/css/style.css";
import "../assets/css/normalize.css"
import "../assets/css/responsive.css"
import "../assets/css/bootstrap.min.css"
import "../assets/fonts/flaticon/flaticon.css"
import "../assets/plugins/fancybox-master/dist/jquery.fancybox.min.css"

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="col-12">
      <ul className="social-links">
        <li><a href="https://www.facebook.com/OptimumNutritionIndonesia"><i className="flaticon-facebook" /></a></li>
        <li><a href="https://www.youtube.com/user/optimumnutrition"><i className="flaticon-youtube" /></a></li>
        <li><a href="https://www.instagram.com/optimumnutrition.id/"><i className="flaticon-instagram" /></a></li>
      </ul>
      <div className="footer-links text-center">
        <a href="/sitemap">Sitemap</a>
      </div>
      <div className="text-box">
        <p className="copyright-text">©  All Rights Reserved by Optimum Nutrition</p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
