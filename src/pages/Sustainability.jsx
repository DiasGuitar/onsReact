import React from "react";
import ShopNow from "../components/ShopNow";

const Sustainability = () => {
  return (
    <>
      <div className="sustainability-page">
        <div className="banner">
          <img
            className="img-fluid d-desktop"
            src="./assets/images/backgrounds/sustainability-banner.jpg"
            alt="Sustainability Banner Image"
          />
          <img
            className="img-fluid d-mobile"
            src="./assets/images/backgrounds/sustainability-banner-mobile.jpg"
            alt="Sustainability Banner Image"
          />
        </div>
        <div className="sustainability-page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="commitment-text-box">
                  <h2>
                    GPN'S SUSTAINABILITY <br /> COMMITMENT
                  </h2>
                  <h4>
                    As a part of the Glanbia Performance Nutrition family of
                    brands, Optimum Nutrition <br /> strives to make a positive
                    impact on people, communities and the planet.
                  </h4>
                  <p>
                    Our organization has set clear global goals to help create a
                    more sustainable future <br /> and we’re working to do our
                    part to help realize these ambitions.
                  </p>
                </div>
                <div className="commitment-card-item">
                  <h2>AT GPN, WE'RE COMMITTED TO:</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card-item">
                        <div className="thumb">
                          <img
                            className="img-fluid"
                            src="./assets/images/backgrounds/ON_WEB_SustainabilityPage_ImageAsset_02_700x350_v01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="text-box">
                          <h3>
                            <span>Reducing food waste</span> in our facilities
                            by 50% by the end of 2030.
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card-item">
                        <div className="thumb">
                          <img
                            className="img-fluid"
                            src="./assets/images/backgrounds/ON_WEB_SustainabilityPage_ImageAsset_01_700x350_v01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="text-box">
                          <h3>
                            Working towards{" "}
                            <span>
                              achieving 100% recyclable, reusable or compostable
                              packaging
                            </span>{" "}
                            by the end of 2030.
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="link-text-box">
                        <p>
                          Learn more about our commitments and efforts to drive
                          positive change at
                        </p>
                        <a
                          href="https://www.glanbia.com/sustainability"
                          target="_blank"
                        >
                          www.glanbia.com/sustainability
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopNow />
    </>
  );
};

export default Sustainability;
