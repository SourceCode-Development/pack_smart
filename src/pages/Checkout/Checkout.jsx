import React from "react";

function Checkout() {
  return (
    <section className="checkout">
      <div className="container">
        <div className="row align-items-md-start">
          <div className="col-xl-8 col-lg-8 col-md-7">
            <div className="checkout-form">
              {/* <h1>Billing Information</h1> */}
              <form
                method="POST"
                action=""
                className="needs-validation"
                noValidate=""
              >
                <div className="row">
                  {/* <div class="col-xl-4 col-md-6">
                                <div class="mb-4">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" name="name" pattern="[A-Za-z ]+"
                                        placeholder="Enter First Name" required="" />
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="mb-4">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" name="name" pattern="[A-Za-z ]+"
                                        placeholder="Enter Last Name" required="" />
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-12">
                                <div class="mb-4">
                                    <label>Company Name (Optional)</label>
                                    <input type="text" class="form-control" name="name" pattern="[A-Za-z ]+"
                                        placeholder="Enter Company Name" required="" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-4">
                                    <label>Address</label>
                                    <input type="text" class="form-control" name="name" placeholder="Enter Address"
                                        required="" />
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="mb-4 d-flex flex-column">
                                    <label>Country</label>
                                    <select>
                                        <option value="" data-display="Select Country">Select Country</option>
                                        <option>Pakistan</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="mb-4 d-flex flex-column">
                                    <label>Region/State</label>
                                    <select>
                                        <option data-display="Select Region/State">Select Region/State</option>
                                        <option>Pakistan</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="mb-4 d-flex flex-column">
                                    <label>City</label>
                                    <select>
                                        <option data-display="Select City">Select City</option>
                                        <option>Pakistan</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="mb-4">
                                    <label>Zip Code</label>
                                    <input type="number" class="form-control" name="name"
                                        placeholder="Enter Zip Code" required="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-4">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email"
                                        pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$"
                                        placeholder="Enter Email*" required="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-4">
                                    <label>Contact No.</label>
                                    <input type="number" class="form-control" name="phone"
                                        onkeypress="if(this.value.length==12) return false;"
                                        placeholder="Enter Contact No.*" required="" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-12">
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="All Price"
                                            required>
                                        <label class="form-check-label mb-0 ms-2" for="All Price">
                                            Ship into different address
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                  <div className="col-md-12">
                    <div className="payment-option">
                      <div className="payment-heading">
                        <h2>Payment Option</h2>
                      </div>
                      <div className="radio-btn">
                        <div className="d-flex flex-column align-items-center">
                          <img src="/images/cash-icon.png" />
                          <span>Cash on Delivery</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="cash"
                              id="Cash on Delivery"
                              defaultChecked=""
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <img src="/images/paypal-icon.png" />
                          <span>Paypal</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="cash"
                              id="Paypal"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <img src="/images/amazon-icon.png" />
                          <span>Amazon Pay</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="cash"
                              id="Amazon Pay"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <img src="/images/debit-icon.png" />
                          <span>Debid/Credit Card</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="cash"
                              id="Debid/Credit Card"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label>Name on Card</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              pattern="[A-Za-z ]+"
                              placeholder="Enter Name on Card"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label>Card Number</label>
                            <input
                              type="number"
                              className="form-control"
                              name="name"
                              placeholder="Enter Card Number"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label>Expire Date</label>
                            <input
                              type="date"
                              className="form-control"
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label>CVC</label>
                            <input
                              type="number"
                              className="form-control"
                              name="name"
                              onkeypress="if(this.value.length==3) return false;"
                              placeholder="Enter Card Number"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-0">
                      <button
                        type="submit"
                        className="btn btn-theme-yellow w-100 mt-3"
                      >
                        PLACE ORDER <i className="fa fa-angle-right ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 sticky-md-top">
            <div className="order-breadcrumbs">
              <a href="checkout">Address</a>
              <a href="#" className="active">
                Payment
              </a>
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
            <div className="coupon-code">
              <div className="heading">
                <h3>Coupon Code</h3>
              </div>
              <form
                method="POST"
                action=""
                className="needs-validation"
                noValidate=""
              >
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$"
                    placeholder="Enter Email*"
                    required=""
                  />
                </div>
                <div className="mb-0">
                  <button type="submit" className="btn btn-theme">
                    APPLY COUPON
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
