import React from "react";
import e1 from "../../../assets/images/e-1.png";
import e2 from "../../../assets/images/e-2.png";
import e3 from "../../../assets/images/e-3.png";
import e4 from "../../../assets/images/e-4.png";

function ExploreSection() {
  return (
    <section className="explore">
      <div className="container">
        <div className="border-line">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-8">
              <div className="left">
                <h2>Clothing &amp; Shoes For Everyone</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-4">
              <div className="right">
                <a href="#">
                  View All <i className="fa fa-angle-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <hr />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <a href="#" className="text-decoration-none">
                <div className="explore-inner">
                  <img src={e1} className="w-100" alt="" />
                  <div className="pt-2 px-3 pb-2 d-flex align-items-center justify-content-between">
                    <h3>Mens</h3>
                    <span>
                      Explore <i className="fa fa-angle-right ms-2" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <a href="#" className="text-decoration-none">
                <div className="explore-inner">
                  <img src={e2} className="w-100" alt="" />
                  <div className="pt-2 px-3 pb-2 d-flex align-items-center justify-content-between">
                    <h3>Women's</h3>
                    <span>
                      Explore <i className="fa fa-angle-right ms-2" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <a href="#" className="text-decoration-none">
                <div className="explore-inner">
                  <img src={e3} className="w-100" alt="" />
                  <div className="pt-2 px-3 pb-2 d-flex align-items-center justify-content-between">
                    <h3>Kids</h3>
                    <span>
                      Explore <i className="fa fa-angle-right ms-2" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <a href="#" className="text-decoration-none">
                <div className="explore-inner">
                  <img src={e4} className="w-100" alt="" />
                  <div className="pt-2 px-3 pb-2 d-flex align-items-center justify-content-between">
                    <h3>Shoes</h3>
                    <span>
                      Explore <i className="fa fa-angle-right ms-2" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
