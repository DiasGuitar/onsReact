import React from "react";
import "../assets/plugins/owl-carousel/dist/assets/owl.carousel.min.css";
import "../assets/plugins/owl-carousel/dist/assets/owl.theme.default.min.css";
import "../assets/css/style.css";
import "../assets/css/normalize.css"
import "../assets/css/responsive.css"
import "../assets/css/bootstrap.min.css"
import "../assets/fonts/flaticon/flaticon.css"
import "../assets/plugins/fancybox-master/dist/jquery.fancybox.min.css"

const ShopNow = () => {
  return (
    <section className="go-to-retailer">
      <h3>FIND A RETAILER</h3>
      <a
        href="/find-a-retailer.html"
        className="btn btn-with-border"
      >
        Shop Now
      </a>
    </section>
  );
};

export default ShopNow;
