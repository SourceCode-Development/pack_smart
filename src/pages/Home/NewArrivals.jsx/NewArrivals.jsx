import React from "react";
import icon1 from "../../../assets/images/icon-1.png";
import sale from "../../../assets/images/sale.png";
import p1 from "../../../assets/images/p-1.png";
import vector from "../../../assets/images/vector.png";
import heartTheme from "../../../assets/images/heart-theme.png";
import p6 from "../../../assets/images/p-6.png";
import p2 from "../../../assets/images/p-2.png";
import p4 from "../../../assets/images/p-4.png";
import p5 from "../../../assets/images/p-5.png";
import p3 from "../../../assets/images/p-3.png";

function NewArrivals({title}) {
  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-8">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <img src={icon1} alt="" />
                <h2>{title}</h2>
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
        <div className="border-line">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img className="sale" src={sale} alt="" />
                <img src={p1} className="w-100" alt="" />
                <h3>CCTV Camara</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img className={sale} alt="" />
                <img src={p2} className="w-100" alt="" />
                <h3>N5000 Laptop</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img src={p3} className="w-100" alt="" />
                <h3>Anker SoundCore Life Q20</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img className="sale" src={sale} alt="" />
                <img src={p4} className="w-100" alt="" />
                <h3>CURREN 8109 Watches</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img className="sale" src="assets/images/sale.png" alt="" />
                <img src={p5} className="w-100" alt="" />
                <h3>Fashionable Touch</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img src={p6} className="w-100" alt="" />
                <h3>Samsung Galaxy Note IV</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img className="sale" src="assets/images/sale.png" alt="" />
                <img src={p1} className="w-100" alt="" />
                <h3>CCTV Camara</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="new-arrivals-inner">
                <img src={p1} className="w-100" alt="" />
                <h3>CCTV Camara</h3>
                <div className="mb-0">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>
                  $690.99 <del>$720.00</del>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="add-cart">
                    Add To Cart
                  </a>
                  <a href="#" className="wishlist">
                    <img src={vector} />
                  </a>
                  <a href="#" className="heart">
                    <img src={heartTheme} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
