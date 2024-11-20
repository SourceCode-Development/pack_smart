import React from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/google-play.png";
import apple from "../../assets/images/app-store.png";
import { Link } from "react-router-dom";

function FooterMain() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div className="footer-logo">
              <a href="#">
                <img src={logo} />
              </a>
              <div className="mb-4">
                <p>Customer Supports:</p>
                <span>(629) 555-0129</span>
              </div>
              <div className="mb-4">
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="footer-links">
              <h6>Top Category</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#"> Computer &amp; Laptop</a>
                </li>
                <li>
                  <a href="#"> SmartPhone</a>
                </li>
                <li>
                  <a href="#"> Headphone</a>
                </li>
                <li>
                  <a href="#"> Accessories</a>
                </li>
                <li>
                  <a href="#"> Camera &amp; Photo</a>
                </li>
                <li>
                  <a href="#"> TV &amp; Homes</a>
                </li>
                <li>
                  <a href="#"> Browse All Product</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="footer-links">
              <h6>Quick links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#"> Shop Product</a>
                </li>
                <li>
                  <a href="#"> Shoping Cart</a>
                </li>
                <li>
                  <a href="#"> Wishlist</a>
                </li>
                <li>
                  <a href="#"> Compare</a>
                </li>
                <li>
                  <a href="#"> Track Order</a>
                </li>
                <li>
                  <a href="#"> Customer Help</a>
                </li>
                <li>
                  <Link to={"/about-us"}> About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div className="footer-links">
              <h6>Download APP</h6>
              <a href="#" style={{ margin: 3 }}>
                <img src={google} alt="" />
              </a>
              <a href="#" style={{ margin: 3 }}>
                <img src={apple} alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div className="footer-links">
              <h6>Popular Tag</h6>
              <div className="tag">
                <a href="#">Game</a>
                <a href="#">iPhone</a>
                <a href="#">TV</a>
                <a href="#">Asus Laptops</a>
                <a href="#">Macbook </a>
                <a href="#">SSD</a>
                <a href="#">Graphics Card </a>
                <a href="#">Power Bank </a>
                <a href="#">Smart TV</a>
                <a href="#">Speaker</a>
                <a href="#">Tablet</a>
                <a href="#">Microwave</a>
                <a href="#">Samsung</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
