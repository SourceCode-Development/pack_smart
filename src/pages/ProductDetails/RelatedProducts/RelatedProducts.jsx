import React from "react";

function RelatedProducts() {
  return (
    <section className="related-products">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="center-heading">
              <h3>Related Products</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-img">
                <a href="#">
                  <img src="/images/product-1.png" alt="" />
                </a>
              </div>
              <div className="desc">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-0">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>4.5</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <a href="#">
                      <img src="/images/cart.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/images/heart-icon.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/images/lucide.png" alt="" />
                    </a>
                  </div>
                </div>
                <span className="price">
                  $99.50 <del>$1128.00</del>
                </span>
                <p>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-img">
                <a href="#">
                  <img src="/images/product-2.png" alt="" />
                </a>
              </div>
              <div className="desc">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-0">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>4.5</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <a href="#">
                      <img src="/images/cart.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/images/heart-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <span className="price">
                  $99.50 <del>$1128.00</del>
                </span>
                <p>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-img">
                <a href="#">
                  <img src="/images/product-3.png" alt="" />
                </a>
              </div>
              <div className="desc">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-0">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>4.5</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <a href="#">
                      <img src="/images/cart.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/images/heart-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <span className="price">
                  $99.50 <del>$1128.00</del>
                </span>
                <p>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-img">
                <a href="#">
                  <img src="/images/product-4.png" alt="" />
                </a>
              </div>
              <div className="desc">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-0">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>4.5</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <a href="#">
                      <img src="/images/cart.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/images/heart-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <span className="price">
                  $99.50 <del>$1128.00</del>
                </span>
                <p>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
