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
                  <Link to="/category/">Computer &amp; Laptop</Link>
                </li>
                <li>
                  <Link to="/category">SmartPhone</Link>
                </li>
                <li>
                  <Link to="/category">eadphone</Link>
                </li>
                <li>
                  <Link to="/category">Accessories</Link>
                </li>
                <li>
                  <Link to="/category">Camera &amp; Photo</Link>
                </li>
                <li>
                  <Link to="/category"> &amp; Homes</Link>
                </li>
                <li>
                  <Link to="/category">Browse All Product</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="footer-links">
              <h6>Quick links</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/category">Shop Product</Link>
                </li>
                <li>
                  <Link to="/my-cart">Shopping Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>

                <li>
                  <Link to="/login">Track Order</Link>
                </li>
                {/* <li>
                  <Link to="/customer-help">Customer Help</Link>
                </li> */}
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div className="footer-links">
              <h6>Download APP</h6>
              <Link to={"/coming-soon"}>
                <img
                  src={google}
                  alt="Google Play"
                  // style={{
                  //   height: isMobileScreen ? "37px" : "47px",
                  //   width: isMobileScreen ? "96px" : "116px",
                  // }}
                  className="footerImgStyle"
                />
              </Link>
              {/* <Link to={siteSettingsData?.applestore_link || "/"}> */}
              <Link to={"/coming-soon"}>
                <img
                  src={apple}
                  alt="Apple Store"
                  // style={{
                  //   height: isMobileScreen ? "38px" : "47px",
                  //   width: isMobileScreen ? "97px" : "117px",
                  //   marginRight: isMobileScreen ? "6px" : "0px",
                  // }}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div className="footer-links">
              <h6>Popular Tag</h6>

              <div className="tag">
                <Link to="/category">Game</Link>
                <Link to="/category">iPhone</Link>
                <Link to="/category">TV</Link>
                <Link to="/category">Asus Laptops</Link>
                <Link to="/category">Macbook</Link>
                <Link to="/category">SSD</Link>
                <Link to="/category">Graphics Card</Link>
                <Link to="/category">Power Bank</Link>
                <Link to="/category">Smart TV</Link>
                <Link to="/category">Speaker</Link>
                <Link to="/category">Tablet</Link>
                <Link to="/category">Microwave</Link>
                <Link to="/category">Samsung</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
