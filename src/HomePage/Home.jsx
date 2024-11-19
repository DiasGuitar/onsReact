import React, { useEffect, useState, useRef } from "react";
import "../assets/plugins/fancybox-master/dist/jquery.fancybox.min.css";
import "../assets/plugins/fancybox-master/dist/jquery.fancybox.min.js";
import "../assets/plugins/owl-carousel/dist/owl.carousel.min.js";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/normalize.css";
import ShopNow from "../components/ShopNow.jsx";

import "./Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "SUPPLEMENTS THAT WORK",
    subtitle: "AS HARD AS YOU DO",
    image: "../backgrounds/hero-banner-desktop.jpg",
    isFullScreen: true,
  },
  {
    titleLines: ["WORLD'S", "BEST SELLING WHEY", "PROTEIN POWDER"],
    leftImage: "../backgrounds/red_bg.jpg",
    image: "../backgrounds/whey_men.jpg",
    productImage: "../products/whey_bottele.png",
    buttonText: "GOLD STANDARD 100% WHEY",
    isProduct: true,
    customStyles: {
      titleSize: "4rem",
      titleLineHeight: "1.1",
      paddingLeft: "20px",
    },
  },
  {
    title: "DEMAND THE BEST",
    subtitle: "FOR YOURSELF",
    leftImage: "#9d8151",
    image: "../backgrounds/gymperson1.jpg",
    productImage: "../products/isolate_bottele.png",
    buttonText: "GOLD STANDARD 100% ISOLATE",
    isProduct: true,
  },
  {
    title: "SERIOUS MASS",
    subtitle: "SERIOUS GAINS",
    leftImage: "../backgrounds/green_bg.jpg",
    image: "../backgrounds/serious-mass_banner-1.jpg",
    productImage: "../products/serious-mass_bottele.png",
    buttonText: "SERIOUS MASS",
    isProduct: true,
  },
  {
    title: "START AS STRONG",
    subtitle: "AS YOU FINISH",
    leftImage: "#822790",
    image: "../backgrounds/aminoenergy_banner.jpg",
    productImage: "../products/amino_bottele.png",
    buttonText: "ESSENTIAL AMINO ENERGY",
    isProduct: true,
  },
  {
    title: "TRAIN. HYDRATE. RECOVER",
    subtitle: "8G BCAA + ELECTROLYTES",
    leftImage: "#c91d67",
    image: "../backgrounds/bcaa_boost_banner.jpg",
    productImage: "../products/bcaa_boost_bottele.png",
    buttonText: "BCAA BOOST",
    isProduct: true,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const changeSlide = (newIndex) => {
    gsap.to(slideRef.current, { x: `-${newIndex * 100}%`, duration: 0.2 });
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const loadScripts = async () => {
      const $ = await import("jquery").then((module) => module.default);
      await import("owl.carousel");
      $(".main-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        smartSpeed: 300,
        autoplay: false,
        autoHeight: true,
        navText: [
          '<span class="flaticon-prev-arrow"></span>',
          '<span class="flaticon-next-arrow"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1024: { items: 1 },
        },
      });
    };
    loadScripts();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="on-story-page">
          {/* Product Main Slider */}
          <div className="carousel" {...handlers}>
        <div className="carousel-track" ref={slideRef}>
          {slides.map((slide, index) => (
            <div key={index} className="hero-section">
              {slide.isFullScreen && index === 0 ? (
                <div
                  className="hero-full-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                </div>
              ) : (
                <>
                  <div
                    className="hero-left"
                    style={
                      slide.leftImage.includes(".jpg") ||
                      slide.leftImage.includes(".png")
                        ? {
                            backgroundImage: `url(${slide.leftImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : {
                            backgroundColor: slide.leftImage,
                          }
                    }
                  >
                    <div className="hero-content" style={{ paddingLeft: slide.customStyles?.paddingLeft || "60px" }}>
                      {slide.titleLines ? (
                        slide.titleLines.map((line, index) => (
                          <h1
                            key={index}
                            className="hero-title"
                            style={{
                              fontSize: slide.customStyles?.titleSize || "3.5rem",
                              lineHeight: slide.customStyles?.titleLineHeight || "1",
                            }}
                          >
                            {line}
                          </h1>
                        ))
                      ) : (
                        <h1 className="hero-title">{slide.title}</h1>
                      )}
                      <p className="hero-subtitle">{slide.subtitle}</p>
                      {slide.isProduct && (
                        <button className="product-button">{slide.buttonText}</button>
                      )}
                    </div>
                  </div>

                  <div
                    className="hero-right"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {slide.isProduct && (
                    <img
                      src={slide.productImage}
                      alt={slide.buttonText}
                      className="product-image"
                      style={
                        slide.buttonText === "GOLD STANDARD 100% WHEY"
                          ? { transform: "translate(-140px, -50%)" }
                          : { transform: "translate(-50%, -50%)" }
                      }
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => changeSlide(index)}
            />
          ))}
        </div>
      </div>
          {/* Our Specialty Section */}
          <section
            className="our-specialty-section"
            style={{
              backgroundImage: "url(assets/images/backgrounds/nwvd-banner.jpg)",
            }}
          >
            <div className="title">
              <h1>
                THE WORLD’S <b>#1 PROTEIN BRAND,</b> FOR A REASON.
              </h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="product-info-box">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="assets/images/backgrounds/whey_men_2.jpg"
                        alt="gold_standard_whey"
                      />
                    </div>
                    <h2 className="title">PROTEIN</h2>
                    <p className="desc">
                      Support your muscle growth and repair by supplementing
                      with our range of protein products.
                    </p>
                    <div className="btn-box dropdown">
                      <a
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="#"
                      >
                        Learn More
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="products/gold-standard-whey.html"
                          >
                            100% Gold Standard Whey
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="products/gold-standard-isolate.html"
                          >
                            100% Gold Standard Isolate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-info-box">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="assets/images/backgrounds/Lifestyle-Image-Weight-Serious-Mass.jpg"
                        alt="Serious Mass"
                      />
                    </div>
                    <h2 className="title">WEIGHT GAINERS</h2>
                    <p className="desc">
                      Build muscle mass and gain weight with high quality
                      calories from protein, carbohydrates and more.
                    </p>
                    <div className="btn-box">
                      <a href="products/serious-mass.html">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-info-box">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="assets/images/backgrounds/AE_Concord_Grape_15_IG.jpg"
                        alt="amino energy optimum nutrition"
                      />
                    </div>
                    <h2 className="title">ENERGY</h2>
                    <p className="desc">
                      Boost your energy with products to help you fuel and focus
                      every day and every workout.
                    </p>
                    <div className="btn-box dropdown">
                      <a
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="#"
                      >
                        Learn More
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="products/amino-energy.html"
                          >
                            Energy &amp; Amino Acids
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="products/bcaa-boost.html"
                          >
                            BCAA BOOST
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Product Marketing Section */}
          <section className="product-marketing-section bg-gradient-red">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 order-sm-2">
                  <div className="product-image">
                    <img
                      className="img-fluid"
                      src="assets/images/products/3-bottles.png"
                      alt="gold standard isolate"
                    />
                  </div>
                </div>
                <div className="col-sm-8 order-sm-1">
                  <div className="text-box">
                    <h2>
                      THE WORLD’S <b>#1 PROTEIN BRAND,</b> FOR A REASON.
                    </h2>
                    <p>WATCH MORE BELOW.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* / End Product Marketing Section */}
          {/* Video Section */}
          <section className="video-section">
            <div className="video-box-container">
              <div
                className="video-box videoOne"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/RECOMMENDED-BY.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/HNEl_mVxOwg">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    RECOMMENDED BY
                    <br />
                    THE BEST
                  </h3>
                  <p>
                    Tried, tested and proven by athletes,
                    <br />
                    coaches and trainers across the
                    <br />
                    globe.
                  </p>
                </a>
              </div>
              <div
                className=" video-box videoTwo"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/WE-ALWAYS-GET.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/8tDvhxCfsP8">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    WE WON’T CUT
                    <br />
                    CORNERS
                  </h3>
                  <p>
                    Our standards are so stringent,
                    <br />
                    that there’s no option but to use
                    <br />
                    the highest quality ingredients
                  </p>
                </a>
              </div>
              <div
                className="video-box videoThree"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/video-3.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/XOW-YAQkU58">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    TRUSTED FOR OVER
                    <br />
                    30 YEARS
                  </h3>
                  <p>
                    We are the most awarded, <br />
                    best-selling protein powder on <br /> the planet for over 30
                    years.
                  </p>
                </a>
              </div>
              <div
                className="video-box videoFour"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/video-5.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/YGXvlWX3kto">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    OBSESSED WITH
                    <br />
                    QUALITY
                  </h3>
                  <p>
                    From source to tub, we control the
                    <br />
                    entire process to the product that
                    <br />
                    ends up on shelf.
                  </p>
                </a>
              </div>
              <div
                className="video-box videoFive"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/video-4.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/ZDc0XdvrwVs">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    250 INGREDIENT TESTS
                    <br />
                    PER DAY
                  </h3>
                  <p>
                    Each ingredient is tested and
                    <br />
                    re-tested to assure exceptional
                    <br />
                    purity, potency and composition.
                  </p>
                </a>
              </div>
              <div
                className="video-box videoSix"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/Tastes-great.jpg)",
                }}
              >
                <a data-fancybox href="https://youtu.be/7FyTQM7PEqc">
                  <div className="icon">
                    <i className="flaticon-play-btn" />
                  </div>
                  <h3>
                    BEST-IN-CLASS
                    <br />
                    INGREDIENTS
                  </h3>
                  <p>
                    We continually innovate on new
                    <br />
                    and existing products, so you always
                    <br />
                    get the best-tasting flavours.
                  </p>
                </a>
              </div>
            </div>
          </section>
          {/* / End Video Section */}
          <ShopNow />
        </div>
      </div>
    </div>
  );
};

export default Home;
