import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-6">
            <div className="cart-sec">
              <div className="cart-heading">
                <h1>Shopping Card</h1>
              </div>
              <div className="cart-title d-xl-flex d-none">
                <div className="products">
                  <span>Products</span>
                </div>
                <div className="price">
                  <span>Price</span>
                </div>
                <div className="quantity">
                  <span>Quantity</span>
                </div>
                <div className="sub-total">
                  <span>Total</span>
                </div>
              </div>
              <div className="cart-info">
                <div className="product-info">
                  <a href="#">
                    <img src="/images/cross.png" />
                  </a>
                  <img src="/images/p-cart.png" />
                  <p>Wired Over-Ear Gaming Headphones with USB</p>
                </div>
                <div className="price-info">
                  <span className="d-lg-none">Price: </span>
                  <span>$250</span>
                </div>
                <div className="product-quantity">
                  <span className="minus">
                    <img src="/images/minus.png" alt="" />
                  </span>
                  <input
                    type="number"
                    className="count"
                    name="qty"
                    defaultValue={1}
                  />
                  <span className="plus">
                    <img src="/images/plus.png" alt="" />
                  </span>
                </div>
                <div className="product-sub-total">
                  <span className="d-lg-none">Total: </span>
                  <span>12</span>
                </div>
              </div>
              <div className="cart-info">
                <div className="product-info">
                  <a href="#">
                    <img src="/images/cross.png" />
                  </a>
                  <img src="/images/p-cart.png" />
                  <p>Wired Over-Ear Gaming Headphones with USB</p>
                </div>
                <div className="price-info">
                  <span className="d-lg-none">Price: </span>
                  <span>
                    <del>$99</del> $250
                  </span>
                </div>
                <div className="product-quantity">
                  <span className="minus">
                    <img src="/images/minus.png" alt="" />
                  </span>
                  <input
                    type="number"
                    className="count"
                    name="qty"
                    defaultValue={1}
                  />
                  <span className="plus">
                    <img src="/images/plus.png" alt="" />
                  </span>
                </div>
                <div className="product-sub-total">
                  <span className="d-lg-none">Total: </span>
                  <span>12</span>
                </div>
              </div>
              <div className="cart-footer">
                <Link
                  to={"/category"}
                  className="btn btn-theme-outline mb-2 mt-2"
                >
                  <i className="fa fa-angle-left me-2" /> RETURN TO SHOP
                </Link>
                <Link to={"/product"} className="btn btn-theme mb-2 mt-2">
                  UPDATE CART
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="cart-total">
              <div className="cart-heading">
                <h2>Card Totals</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Sub-total</p>
                <span>$320</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Shipping</p>
                <span>Free</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Discount</p>
                <span>$24</span>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                <p>Total</p>
                <span>$357.99 USD</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <button
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  className="btn btn-theme-yellow w-100"
                  onClick={() => navigate("/checkout")}
                >
                  PROCEED TO CHECKOUT <i className="fa fa-angle-right ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
