import React from "react";
// import comLog from "../../../assets/images/company-logo.png";

function SubscribeSection() {
  return (
    <section className="subscribe-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <div className="center-heading">
              <h3>Subscribe to our newsletter</h3>
              <p>
                Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
                libero et cursus. Donec non quam urna. Quisque vitae porta
                ipsum.
              </p>
              <form >
                <div className="subscribe-inner">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$"
                    required=""
                  />
                  <button type="submit">
                    Subscribe <i className="fa fa-arrow-right ms-2" />
                  </button>
                </div>
              </form>
              {/* <img src={comLog} className="w-100" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
