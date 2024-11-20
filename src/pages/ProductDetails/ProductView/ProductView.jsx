import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import ProductDetailsImages from "./ProductDetailsImages";
import CustomSelectOption from "../../../components/SelectOption/CustomSelectOption";
import { Link } from "react-router-dom";
// import { BaseUrl, EndPoints } from "../../../utils/Api";
// import ProductReveiw from "../ProductReview/ProductReveiw";
// import loader from "../../..//images/loader.gif";
// import ProductInfo from "../ProductInfo/ProductInfo";
// import { productBreadcrumbsHandler } from "../../../redux/actions/BreadcrumbActions";

var images = [
  {
    image_path: "/images/product-img-1.png",
  },
  {
    image_path: "/images/product-img.png",
  },
  {
    image_path: "/images/product-img-1.png",
  },
];

const ProductView = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [storage, setstorage] = useState(false);
  const [size, setSize] = useState(false);
  const [memory, setMemory] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobileScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsMobileScreen(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <div className="row">
            <ProductDetailsImages
              key={"product-images"}
              images={images}
              isMobileScreen={isMobileScreen}
            />
            {/* <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="img-slider">
                <div className="slider-single">
                  <div>
                    <img
                      src="/images/product-img.png"
                      alt="Single Image"
                    />
                  </div>
                  <div>
                    <img src="/images/product-img-1.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="thumbnail-img mt-3">
                <div className="slider">
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img-1.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/product-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-xl-7 col-lg-7 col-md-7">
              <div className="detail-right">
                <div className="d-md-flex align-items-center gap-3">
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <span>4.7 Star Rating</span>
                  <small>(21,671 User feedback)</small>
                </div>
                <h1>
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                  256GB SSD Storage) - Space Gray
                </h1>
                <div className="stock-detail">
                  <div className="mb-0">
                    <p>
                      Sku: <span>A264671</span>
                    </p>
                    <p>
                      Brand: <span>Apple</span>
                    </p>
                  </div>
                  <div className="mb-0">
                    <p>
                      Availability: <span className="green">In Stock</span>
                    </p>
                    <p>
                      Category: <span>Electronic Devices</span>
                    </p>
                  </div>
                </div>
                <div className="product-price">
                  <span>
                    $1699 <del>$1999.00</del>
                  </span>
                  <span className="discount">21% OFF</span>
                </div>
                <div className="variant">
                  <div className="color">
                    <p>Color: ( Dark Grey )</p>
                    <div className="form-group d-flex">
                      <div className="mb-0">
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="option1"
                          autoComplete="off"
                          defaultChecked=""
                        />
                        <label className="btn btn-secondary" htmlFor="option1">
                          <img src="/images/color-1.png" alt="" />
                        </label>
                      </div>
                      <div className="mb-0">
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="option2"
                          autoComplete="off"
                        />
                        <label className="btn btn-secondary" htmlFor="option2">
                          <img src="/images/color-2.png" alt="" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="size">
                    <p>Size</p>

                    <CustomSelectOption
                      options={[
                        "13-inch Liquid Retina XDR display",
                        "14-inch Liquid Retina XDR display",
                        "15-inch Liquid Retina XDR display",
                      ]}
                      selectedOption={size}
                      setSelectedOption={setSize}
                      placeholder="Size"
                    />
                  </div>
                </div>
                <div className="variant">
                  <div className="memory">
                    <p>Memory</p>
                    <CustomSelectOption
                      options={[
                        "13-GB unified memory",
                        "14-GB unified memory",
                        "15-GB unified memory",
                      ]}
                      selectedOption={memory}
                      setSelectedOption={setMemory}
                      placeholder="Memory"
                    />
                  </div>
                  <div className="storage">
                    <p>Storage</p>
                    <CustomSelectOption
                      options={[
                        "13-TV SSD Storage",
                        "14-TV SSD Storage",
                        "15-TV SSD Storage",
                      ]}
                      selectedOption={storage}
                      setSelectedOption={setstorage}
                      placeholder="Storage"
                    />
                  </div>
                </div>
                <div className="add-cart">
                  <div className="quantity">
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
                  <div className="add-button">
                    <Link to="/my-cart" type="button" className=" add-to-cart bt">
                      Add To Cart <i className="fa fa-shopping-cart ms-2" />
                    </Link>
                  </div>
                  <div className="buy-button">
                    <button type="button" className="btn buy-now">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="wishlist">
                  <div className="add-wishlist">
                    <img src="/images/wishlist.png" alt="" />
                    <span>Add to Wishlist</span>
                  </div>
                  <div className="share-product">
                    <span>Share Product:</span>
                    <a href="#">
                      <i className="fa fa-facebook-square" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
                <div className="guarantee">
                  <span>100% Guarantee Safe Checkout</span>
                  <img src="/images/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------ */}
      <section className="reviews">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="border pt-3 pb-2">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#product-description"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      PRODUCT DESCRIPTION
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#product-information"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      ADDITIONAL INFORMATION
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      REVIEWS
                    </button>
                  </div>
                </nav>
                <div className="tab-content pt-3 pb-2 px-3" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="product-description"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-xl-6 col-lg-6 col-md-4">
                        <h2>Description</h2>
                        <p className="desc">
                          The most powerful MacBook Pro ever is here. With the
                          blazing-fast M1 Pro or M1 Max chip — the first Apple
                          silicon designed for pros — you get groundbreaking
                          performance and amazing battery life. Add to that a
                          stunning Liquid Retina XDR display, the best camera
                          and audio ever in a Mac notebook, and all the ports
                          you need. The first notebook of its kind, this MacBook
                          Pro is a beast. M1 Pro takes the exceptional
                          performance of the M1 architecture to a whole new
                          level for pro users.
                        </p>
                        <p className="desc">
                          Even the most ambitious projects are easily handled
                          with up to 10 CPU cores, up to 16 GPU cores, a 16‑core
                          Neural Engine, and dedicated encode and decode media
                          engines that support H.264, HEVC, and ProRes codecs.
                        </p>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4">
                        <h2>Feature</h2>
                        <div className="feature-info">
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <img src="/images/medal.png" alt="" />
                            <span>Free 1 Year Warranty</span>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <img src="/images/truck.png" alt="" />
                            <span>Free Shipping &amp; Fasted Delivery</span>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <img src="/images/handshake.png" alt="" />
                            <span>100% Money-back guarantee</span>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <img src="/images/headphones.png" alt="" />
                            <span>24/7 Customer support</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <img src="/images/creditcard.png" alt="" />
                            <span>Secure payment method</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4">
                        <h2>Shipping Information</h2>
                        <div className="shipping-info">
                          <p>
                            Courier: <span> 2 - 4 days, free shipping</span>
                          </p>
                          <p>
                            Local Shipping: <span> up to one week, $19.00</span>
                          </p>
                          <p>
                            UPS Ground Shipping:{" "}
                            <span> 4 - 6 days, $29.00</span>
                          </p>
                          <p>
                            Unishop Global Export:{" "}
                            <span> 3 - 4 days, $39.00</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="product-information"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                EU 41 (US 8), EU 42 (US 9), EU 43 (US 10), EU 45
                                (US 12)
                              </td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td>S , M , L , XS</td>
                            </tr>
                            <tr>
                              <th>Fabric</th>
                              <td>Cotton (100%)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="review-form">
                          <h3>WRITE A REVIEW</h3>
                          <form
                            method="POST"
                            action=""
                            className="needs-validation"
                            noValidate=""
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label>Your Name*</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    pattern="[A-Za-z ]+"
                                    placeholder="Enter Name*"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label>Upload Picture</label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    name="file"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-4 d-flex align-items-center justify-content-between">
                                  <label>Your Rating:</label>
                                  <div className="star">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label>Write a Review</label>
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows={4}
                                    cols={50}
                                    placeholder="Write a Review"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-0 text-end">
                                  <button
                                    type="submit"
                                    className="btn btn-theme-yellow"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="review-body">
                          <div className="client-review-img">
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                          </div>
                          <div className="review-sec">
                            <img src="/images/r-img.png" className="me-3" />
                            <div className="review-left">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="mb-0">
                                  <span className="name">John</span>
                                  <span>7th Jun 2023</span>
                                </div>
                                <div className="star">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-half-o" />
                                </div>
                              </div>
                              <p className="mt-2">
                                Great Quality trousers!!! Blending comfort and
                                style, these boys' joggers will be a versatile
                                addition to their wardrobe
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-body">
                          <div className="client-review-img">
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                          </div>
                          <div className="review-sec">
                            <img src="/images/r-img.png" className="me-3" />
                            <div className="review-left">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="mb-0">
                                  <span className="name">John</span>
                                  <span>7th Jun 2023</span>
                                </div>
                                <div className="star">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-half-o" />
                                </div>
                              </div>
                              <p className="mt-2">
                                Great Quality trousers!!! Blending comfort and
                                style, these boys' joggers will be a versatile
                                addition to their wardrobe
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-body">
                          <div className="client-review-img">
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                            <img src="/images/c-1.png" />
                          </div>
                          <div className="review-sec">
                            <img src="/images/r-img.png" className="me-3" />
                            <div className="review-left">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="mb-0">
                                  <span className="name">John</span>
                                  <span>7th Jun 2023</span>
                                </div>
                                <div className="star">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-half-o" />
                                </div>
                              </div>
                              <p className="mt-2">
                                Great Quality trousers!!! Blending comfort and
                                style, these boys' joggers will be a versatile
                                addition to their wardrobe
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductView;
