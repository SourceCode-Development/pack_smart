import React from "react";
import { Link } from "react-router-dom";

function CheckoutSummary({ setActiveSection, activeSection }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-5 sticky-md-top">
      <div className="order-breadcrumbs">
        <Link
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("Address");
          }}
          className={activeSection === "Address" && "active"}
        >
          <span style={{ fontWeight: "500" }}>Address</span>
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("Payment");
          }}
          className={activeSection === "Payment" && "active"}
        >
          <span style={{ fontWeight: "500" }}>Payment</span>
        </Link>
      </div>
      <div className="order-summary">
        <div className="heading">
          <h3>Order Summery</h3>
        </div>
        <div className="cart-product">
          <img src="/images/p-cart.png" />
          <div className="mb-0">
            <p>Wired Over-Ear Gaming Headphones with USB</p>
            <span>1 * $70</span>
          </div>
        </div>
        <div className="cart-product">
          <img src="/images/p-cart.png" />
          <div className="mb-0">
            <p>Wired Over-Ear Gaming Headphones with USB</p>
            <span>3 * $250</span>
          </div>
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
        <div className="d-flex align-items-center justify-content-between mb-3">
          <p>Tax</p>
          <span>$61.99</span>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
          <p>Total</p>
          <span>$357.99 USD</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
