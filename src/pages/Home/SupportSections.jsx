import React from "react";

function SupportSections() {
  return (
    <section className="support-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="support-inner">
              <div className="s-box">
                <img src="assets/images/s-1.png" alt="" />
                <div className="mb-0">
                  <p>Fasted Delivery</p>
                  <span>Delivery in 24/H</span>
                </div>
              </div>
              <div className="s-box">
                <img src="assets/images/s-2.png" alt="" />
                <div className="mb-0">
                  <p>24 Hours Return</p>
                  <span>100% money-back guarantee</span>
                </div>
              </div>
              <div className="s-box">
                <img src="assets/images/s-3.png" alt="" />
                <div className="mb-0">
                  <p>Secure Payment</p>
                  <span>Your money is safe</span>
                </div>
              </div>
              <div className="s-box">
                <img src="assets/images/s-4.png" alt="" />
                <div className="mb-0">
                  <p>Support 24/7</p>
                  <span>Live contact/message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSections;
