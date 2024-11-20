import React from "react";
import logo from "../../../assets/images/logo.png";
import shoppingcart from "../../../assets/images/shoppingcart.png";
import heart from "../../../assets/images/heart.png";
import user from "../../../assets/images/user.png";
import { Link } from "react-router-dom";

function CenterHeader() {
  return (
    <section className="center-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-7 order-1 order-xl-1 order-lg-1 order-md-1">
            <div className="top-logo">
              <nav className="navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img src={logo} />
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5 col-12 order-3 order-xl-2 order-lg-2 order-md-2">
            <form>
              <div className="input-group has-search">
                <input
                  type="text"
                  className="form-control top-search"
                  placeholder="Search for anything..."
                  required=""
                />
                <button className="btn btn-search" type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
              {/* <ul className="product-list">
                <li>
                  <a href="#">Computer &amp; Laptop</a>
                </li>
                <li>
                  <a href="#">Computer Accessories</a>
                </li>
                <li>
                  <a href="#">SmartPhone</a>
                </li>
                <li>
                  <a href="#">Headphone</a>
                </li>
              </ul> */}
            </form>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-5 order-2 order-xl-3 order-lg-3 order-md-3">
            <div className="top-icon">
              <ul className="d-flex list-unstyled justify-content-end align-items-center mb-0">
                <li className="right">
                  <a href="#">
                    <img src={shoppingcart} />
                    <span>2</span>
                  </a>
                </li>
                <li className="right">
                  <a href="#">
                    <img src={heart} />
                    <span>3</span>
                  </a>
                </li>
                <li className="right">
                  <a href="#">
                    <img src={user} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CenterHeader;
