import React from "react";
import f1 from "../../../assets/images/f-1.png";
import f2 from "../../../assets/images/f-2.png";
import f3 from "../../../assets/images/f-3.png";
import f4 from "../../../assets/images/f-4.png";
import f5 from "../../../assets/images/f-5.png";
import f6 from "../../../assets/images/f-6.png";
import f7 from "../../../assets/images/f-7.png";
import f8 from "../../../assets/images/f-8.png";
import { Link } from "react-router-dom";

function FeatureSection() {
  return (
    <section className="featured-sec">
      <div className="container">
        <div className="border-line">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="center-heading">
                <h1>Featured Categories</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="featured-body">
                <Link to={"/category"} className="featured-box">
                  <img src={f1} className="w-100" alt="" />
                  <span>Luggage &amp; Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f2} className="w-100" alt="" />
                  <span>Tote Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f3} className="w-100" alt="" />
                  <span>Laptop Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f4} className="w-100" alt="" />
                  <span>Cross Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f5} className="w-100" alt="" />
                  <span>Duffle Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f6} className="w-100" alt="" />
                  <span>Cross Body Bags</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f7} className="w-100" alt="" />
                  <span>Backpacks</span>
                </Link>
                <Link to={"/category"} className="featured-box">
                  <img src={f8} className="w-100" alt="" />
                  <span>Travelling Bags</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
