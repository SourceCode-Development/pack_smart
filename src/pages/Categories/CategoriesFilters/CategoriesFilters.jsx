import React from "react";

function CategoriesFilters() {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <div className="left mobile-sidebar sticky-md-top" id="sidebar">
        <div className="category">
          <div className="d-flex align-items-center justify-content-between d-md-none d-block mb-2">
            <span className="d-md-none d-block mb-0">Filter Search:</span>
            <label htmlFor="menu-toggle">
              <img
                className="filter-close"
                src="assets/images/filter-close.png"
              />
            </label>
          </div>
          <hr className="d-md-none d-block mb-3" />
          <span>Category</span>
          <div className="accordion" id="maincategory">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Electronics Devices
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#maincategory"
              >
                <div className="accordion-body">
                  <a href="#">Electronics Devices</a>
                  <a href="#">Computer &amp; Laptop</a>
                  <a href="#">Computer Accessories</a>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="subOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSubOne"
                        aria-expanded="false"
                        aria-controls="collapseSubOne"
                      >
                        SmartPhone
                      </button>
                    </h2>
                    <div
                      id="collapseSubOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="subOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <a href="#">Electronics Devices</a>
                      </div>
                    </div>
                  </div>
                  <a href="#">SmartPhone</a>
                  <a href="#">Headphone</a>
                  <a href="#">Mobile Accessories</a>
                  <a href="#">Gaming Console</a>
                  <a href="#">Camera &amp; Photo</a>
                  <a href="#">TV &amp; Homes Appliances</a>
                  <a href="#">Watchs &amp; Accessories</a>
                </div>
              </div>
            </div>
          </div>
          {/* <a href="#" class="active">Electronics Devices</a>
                      <a href="#">Computer & Laptop</a>
                      <a href="#">Computer Accessories</a>
                      <a href="#">SmartPhone</a>
                      <a href="#">Headphone</a>
                      <a href="#">Mobile Accessories</a>
                      <a href="#">Gaming Console</a>
                      <a href="#">Camera & Photo</a>
                      <a href="#">TV & Homes Appliances</a>
                      <a href="#">Watchs & Accessories</a> */}
        </div>
        <div className="price-range mt-0">
          <span>Price Range</span>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="All Price"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="All Price">
              All Price
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="Under $20"
            />
            <label className="form-check-label" htmlFor="Under $20">
              Under $20
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="$25 to $100"
            />
            <label className="form-check-label" htmlFor="$25 to $100">
              $25 to $100
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="$100 to $300"
            />
            <label className="form-check-label" htmlFor="$100 to $300">
              $100 to $300
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="$300 to $500"
            />
            <label className="form-check-label" htmlFor="$300 to $500">
              $300 to $500
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="$500 to $1,000"
            />
            <label className="form-check-label" htmlFor="$500 to $1,000">
              $500 to $1,000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="$1,000 to $10,000"
            />
            <label className="form-check-label" htmlFor="$1,000 to $10,000">
              $1,000 to $10,000
            </label>
          </div>
        </div>
        <div className="popular-brands">
          <span>Popular Brands</span>
          <div className="brands-inner">
            <div className="left">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Apple"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="Apple">
                  Apple
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Microsoft"
                />
                <label className="form-check-label" htmlFor="Microsoft">
                  Microsoft
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Dell"
                />
                <label className="form-check-label" htmlFor="Dell">
                  Dell
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Symphony"
                />
                <label className="form-check-label" htmlFor="Symphony">
                  Symphony
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Sony"
                />
                <label className="form-check-label" htmlFor="Sony">
                  Sony
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="LG"
                />
                <label className="form-check-label" htmlFor="LG">
                  LG
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="One Plus"
                />
                <label className="form-check-label" htmlFor="One Plus">
                  One Plus
                </label>
              </div>
            </div>
            <div className="right">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Google"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="Google">
                  Google
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Samsung"
                />
                <label className="form-check-label" htmlFor="Samsung">
                  Samsung
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="HP"
                />
                <label className="form-check-label" htmlFor="HP">
                  HP
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Xiaomi"
                />
                <label className="form-check-label" htmlFor="Xiaomi">
                  Xiaomi
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Panasonic"
                />
                <label className="form-check-label" htmlFor="Panasonic">
                  Panasonic
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="Intel"
                />
                <label className="form-check-label" htmlFor="Intel">
                  Intel
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-tags">
          <span>Popular Tag</span>
          <div className="tag">
            <a href="#">Game</a>
            <a href="#" className="active">
              iPhone
            </a>
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
  );
}

export default CategoriesFilters;
