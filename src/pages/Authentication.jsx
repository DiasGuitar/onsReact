import React from "react";

const Authentication = () => {
  return (
    <>
      <div>
        <section className="product-auth-verification-section" style={{ paddingTop: 80}}>
          <div
            className="product-authentication-container"
            style={{ marginTop: 73 }}
          >
            <div
              className="bg-image"
              style={{
                backgroundImage:
                  "url(./authentication/images/backgrounds/auth_form_bg.jpg)",
              }}
            />
            <div className="overlay opacity-3" />
            <div className="product-auth-form">
              <div className="title">
                <h1>PRODUCT AUTHENTICATION</h1>
                <p>
                  Please enter the secret product code from the on-pack
                  verification sticker
                </p>
              </div>
              <form
                method="POST"
                action="../../check-code"
                acceptCharset="UTF-8"
                className="form-signup"
                id="code_check"
              >
                <input
                  name="_token"
                  type="hidden"
                  defaultValue="MyKyVsqhN2OskMIsmtkcGMxH2ffJEvuK1ujxC0CZ"
                />
                <div className="form-group">
                  <input
                    className="form-control"
                    maxLength={9}
                    placeholder="Enter Your Product Code"
                    name="code"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Your Name"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group agreeWith">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="agreed"
                      className="form-control"
                      id="chekcbox1"
                    />
                    <label htmlFor="chekcbox1">
                      <span
                        className="checkbox-icon"
                        style={{ border: "2px solid #fff" }}
                      />
                      I agree to accept promotional offers through email from
                      Optimum Nutrition.
                    </label>
                  </div>
                </div>
                <div className="no-robot-captcha">
                  <div
                    id="authCaptcha"
                    className="g-recaptcha"
                    data-expired-callback="expCallback"
                    data-callback="recaptchaCallback"
                    data-theme="light"
                  />
                </div>
                <div className="btn-box">
                  <button className="btn" type="submit" disabled>
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="product-verification-container">
            <div
              className="bg-image"
              style={{
                backgroundImage:
                  "url(https://optimumnutritionsea.com/frontend/images/backgrounds/uncompro_bg.jpg)",
              }}
            />
            <div className="verification-counter">
              <div className="title">
                <h3>NUMBER OF VERIFICATIONS DONE</h3>
              </div>
              <div id="verifyCount">
                <span className="number">4</span>
                <span className="number">2</span>
                <span className="number">0</span>
                <span className="number">0</span>
                <span className="number">5</span>
                <span className="number">8</span>
              </div>
            </div>
            <div className="product-image">
              <img
                className="img-fluid"
                src="https://optimumnutritionsea.com/frontend/images/products/whey_bottele_grup_big.png"
                alt="optimum gold standard 100 whey"
              />
            </div>
          </div>
        </section>
        {/* Product Authentication Tips Section */}
        <section
          id="authentication-tips"
          className="product-authentication-tips-section"
        >
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url(./authentication/images/backgrounds/ONAthletes-29.jpg)",
            }}
          />
          <div className="overlay opacity-8" />
          <div className="sec-title">
            <h2>GET THE REAL DEAL</h2>
          </div>
          <div className="tips-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="tips-card">
                    <div className="image-box">
                      <img
                        className="img-fluid"
                        src="./assets/images/backgrounds/pr1-rev.jpg"
                        alt="product verification"
                      />
                    </div>
                    <div className="title">
                      <h4>ONLY ACCEPT PRODUCTS WITH AN UNSCRATCHED STICKER</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="tips-card">
                    <div className="video-box">
                      <img
                        className="img-fluid"
                        src="./assets/images/backgrounds/auth_video_bg.jpg"
                        alt="product video"
                      />
                      <a
                        data-fancybox
                        href="https://optimumnutritionsea.com/frontend/videos/ON_AuthenticationSticker_ENG_SEA.mp4"
                        className="play-btn"
                      >
                        <i className="flaticon-play-btn" />
                      </a>
                    </div>
                    <div className="title">
                      <h4>
                        DEMAND FOR A REFUND IF YOUR PRODUCT DOES NOT VERIFY ON
                        THE WEBSITE
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="tips-card">
                    <div className="image-box">
                      <img
                        className="img-fluid"
                        src="./assets/images/backgrounds/pr3_SG.jpg"
                        alt="authorized retailer"
                      />
                    </div>
                    <div className="title">
                      <h4>ONLY BUY FROM AUTHORIZED RETAILERS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Authentication;
