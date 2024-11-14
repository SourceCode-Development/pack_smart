import React from "react";
import icon from "../../../assets/images/icon.png";
import img3 from "../../../assets/images/img-3.png";
import img4 from "../../../assets/images/img-4.png";
import img5 from "../../../assets/images/img-5.png";
import img6 from "../../../assets/images/img-6.png";
import img7 from "../../../assets/images/img-7.png";
import img8 from "../../../assets/images/img-8.png";

function TechnologySection() {
  return (
    <section className="technology">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-8">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <img src={icon} alt="Technology Icon" />
                <h2>TECHNOLOGY</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-4">
            <div className="right">
              <a href="#">
                View All <i className="fa fa-angle-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>Electronics</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img3} alt="Electronics" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>Tables &amp; Mobiles</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img4} alt="Tables & Mobiles" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>TV &amp; Audio</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img5} alt="TV & Audio" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>PC &amp; Laptop</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img6} alt="PC & Laptop" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>Accessories</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img7} alt="Accessories" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="technology-inner">
              <div className="d-flex flex-column">
                <h3>Gaming</h3>
                <a href="#">Computers</a>
                <a href="#">Laptop</a>
                <a href="#">Macbook</a>
                <a href="#">Accessories</a>
                <a href="#">More...</a>
              </div>
              <img src={img8} alt="Gaming" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="btn-sec">
              <button className="btn btn-theme">
                More Technology <i className="fa fa-angle-right ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
