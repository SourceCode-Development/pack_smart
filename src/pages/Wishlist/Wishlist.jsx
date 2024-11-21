import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Wishlist() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="wishlist-sec">
              <div className="wishlist-heading">
                <h1>Wishlist</h1>
              </div>
              <div className="wishlist-title d-xl-flex d-none">
                <div className="products">
                  <span>Products</span>
                </div>
                <div className="price">
                  <span>Price</span>
                </div>
                <div className="stock-status">
                  <span>Stock Status</span>
                </div>
                <div className="action">
                  <span>Actions</span>
                </div>
              </div>
              <div className="wishlist-info">
                <div className="product-info">
                  <a href="#">
                    <img src="/images/cross.png" />
                  </a>
                  <img src="/images/p-cart.png" />
                  <p>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                    Headphones for Workouts and Running, Triple Black
                  </p>
                </div>
                <div className="price-info">
                  <span className="d-lg-none">Price: </span>
                  <span>
                    <del>$99</del> $250
                  </span>
                </div>
                <div className="stock-status">
                  <span className="d-lg-none">Stock Status: </span>
                  <span className="green">In Stock</span>
                </div>
                <div className="action">
                  <Link to="/my-cart" className="btn btn-theme-yellow">
                    Add To Cart <i className="fa fa-shopping-cart ms-2" />
                  </Link>
                </div>
              </div>
              <div className="wishlist-info">
                <div className="product-info">
                  <a href="#">
                    <img src="/images/cross.png" />
                  </a>
                  <img src="/images/p-cart.png" />
                  <p>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
                    Headphones for Workouts and Running, Triple Black
                  </p>
                </div>
                <div className="price-info">
                  <span className="d-lg-none">Price: </span>
                  <span>
                    <del>$99</del> $250
                  </span>
                </div>
                <div className="stock-status">
                  <span className="d-lg-none">Stock Status: </span>
                  <span className="red">Out Of Stock</span>
                </div>
                <div className="action">
                  <Link to="/my-cart" className="btn btn-theme-yellow ">
                    Add To Cart <i className="fa fa-shopping-cart ms-2" />
                  </Link>
                </div>
              </div>
              <div className="wishlist-info">
                <div className="product-info">
                  <a href="#">
                    <img src="/images/cross.png" />
                  </a>
                  <img src="/images/p-cart.png" />
                  <p>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</p>
                </div>
                <div className="price-info">
                  <span className="d-lg-none">Price: </span>
                  <span>$2,300.00</span>
                </div>
                <div className="stock-status">
                  <span className="d-lg-none">Stock Status: </span>
                  <span className="green">In Stock</span>
                </div>
                <div className="action">
                  <Link to="/my-cart" className="btn btn-theme-yellow disabled">
                    Add To Cart <i className="fa fa-shopping-cart ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
