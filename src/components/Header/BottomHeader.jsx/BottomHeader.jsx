import React, { useState, useEffect } from "react";

import phoneIcon from "../../../assets/images/phone-icon.png";
import toggle from "../../../assets/images/toggle-img.png";
import { Link } from "react-router-dom";

function BottomHeader() {
  const [visibleCategory, setVisibleCategory] = useState(null);

  // // Function to handle category hover
  const categoryHover = (categoryId, style) => {
    document.getElementById("Luggage").style.display = "none";
    document.getElementById("Tote").style.display = "none";
    document.getElementById("Laptop").style.display = "none";
    document.getElementById("Cross").style.display = "none";
    document.getElementById("Duffle").style.display = "none";
    document.getElementById("Backpacks").style.display = "none";
    let categoryIds = document.getElementById(categoryId);
    categoryIds.style.display = style;
  };

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".category-right")) {
      document.getElementById("Luggage").style.display = "none";
      document.getElementById("Tote").style.display = "none";
      document.getElementById("Laptop").style.display = "none";
      document.getElementById("Cross").style.display = "none";
      document.getElementById("Duffle").style.display = "none";
      document.getElementById("Backpacks").style.display = "none";
    }
  });

  // // Click event listener to hide categories when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest(".category-right")) {
      // setVisibleCategory(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleShowCategory() {
    setVisibleCategory((prev) => !prev);
  }

  return (
    <section className="bottom-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-5">
            <div className="left">
              <div className="all-category">
                <div className="dropdown d-xl-block d-none">
                  <button
                    className={`btn-category ${visibleCategory ? "show" : ""} `}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleShowCategory}
                  >
                    All Category <i className="fa fa-angle-down" />
                  </button>
                  <ul
                    className={`dropdown-menu ${visibleCategory ? "show" : ""}`}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Luggage", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Luggage &amp; Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Tote", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Tote Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Laptop", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Laptop Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Cross", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Cross &amp; Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Duffle", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Duffle Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Backpacks", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Backpacks Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Backpacks", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Backpacks Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseOver={() => categoryHover("Backpacks", "block")}
                        className="dropdown-item"
                        href="#"
                      >
                        Backpacks Bags
                      </a>
                    </li>
                  </ul>
                  <div className="category-right" id="Luggage">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                            <li>
                              <a href="#">Luggage Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-right" id="Tote">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-right" id="Laptop">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                            <li>
                              <a href="#">Laptop Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-right" id="Cross">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                            <li>
                              <a href="#">Cross Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-right" id="Duffle">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                            <li>
                              <a href="#">Duffle Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                            <li>
                              <a href="#">Tote Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-right" id="Backpacks">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="category-list">
                          <ul>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                            <li>
                              <a href="#">Backpacks Bags </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="navbar-toggler d-xl-none d-block"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  {/* <img
                    src={toggle}
                    alt="Toggle navigation"
                  /> */}
                </button>
              </div>
              <div className="support">
                <div className="support-inner">
                  <span>
                    <Link to="/about-us">About Us</Link>
                  </span>
                </div>
                <div className="support-inner">
                  <span>
                    <Link to="#">Contact Us</Link>
                  </span>
                </div>
                {/* <div class="support-inner">
                        <div class="dropdown d-xl-block d-none">
                            <button class="btn btn-category" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pages <i class="fa fa-angle-down"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Pages 1</a></li>
                                <li><a class="dropdown-item" href="#">Pages 2</a></li>
                                <li><a class="dropdown-item" href="#">Pages 3</a></li>
                            </ul>
                        </div>
                    </div> */}
                <div className="support-inner">
                  <span className="offer">
                    <a href="#">Offers</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-7">
            <div className="right">
              <img src={phoneIcon} alt="" className="me-2" />
              <a href="tel:+1234567890">
                <span>+1234567890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomHeader;
