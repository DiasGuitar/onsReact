import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="contact-us-container">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url(https://optimumnutritionsea.com/frontend/images/backgrounds/stocks-bg.jpg)",
          }}
        />
        <div className="overlay opacity-1" />
        <div className="sec-title">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <div className="contact-us-form">
                <form id="contactUs" action>
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="category">Select Category</label>
                      <select className="form-control" name="category">
                        <option value="authenticity">Authenticity</option>
                        <option value="store">Store</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="f_name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="email">Your Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mail"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="contact_number">Your Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        cols={30}
                        rows={5}
                        placeholder="Write your message here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="alert" style={{ display: "none" }}>
                        <strong />
                      </div>
                    </div>
                  </div>
                  <div className="btn-box">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="no-robot-captcha">
                          <div
                            id="authCaptcha"
                            className="g-recaptcha"
                            data-expired-callback="expCallback"
                            data-callback="recaptchaCallback"
                            data-theme="light"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="submit-btn">
                          <button className="btn btn-with-border">
                            SEND MESSAGE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
