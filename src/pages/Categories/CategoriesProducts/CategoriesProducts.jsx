import React, { useState } from "react";
import ProductsGridView from "./ProductsGridView.jsx/ProductsGridView";
import CustomSelectOption from "../../../components/SelectOption/CustomSelectOption";
// import Orderlist from "../../..//images/order-list.png";

function CategoriesProducts() {
  const [sortBy, setSortBy] = useState("");
  const [pagination, setPagination] = useState("");

  const sortOptions = ["Newest", "Low To High", "High To Low"];
  const pageOptions = ["Show 10", "Show 20", "Show 30"];

  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="right">
        <div className="search-filter">
          <form>
            <div className="input-group has-search">
              <input
                type="text"
                className="form-control inner-filter"
                placeholder="Search for anything..."
                required=""
              />
              <button className="btn filter-search" type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
          <div className="mobile-input">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle">☰ Filter Search</label>
          </div>

          <div className="sortby">
            <span className="text-black">Sort By : </span>
            <CustomSelectOption
              options={sortOptions}
              selectedOption={sortBy}
              setSelectedOption={setSortBy}
              placeholder="Sort By"
            />
            <a href="#">
              <img
                src={"/images/order-list.png"}
                className="d-xl-block d-none"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="active-filter">
          <div className="d-xl-flex d-none align-items-center gap-2">
            <span>Active Filter : </span>
            <div className="remove-filter">
              <a href="#">
                Electronics Devices <i className="fa fa-close" />
              </a>
              <a href="#">
                5 Star Rating <i className="fa fa-close" />
              </a>
            </div>
          </div>
          <span className="results">
            65,867 <small>Results found</small>
          </span>
        </div>
        <ProductsGridView />
        <div className="pagination">
          <CustomSelectOption
            options={pageOptions}
            selectedOption={pagination}
            setSelectedOption={setPagination}
            placeholder="Sort By"
          />
          <div className="page-number">
            <a href="#">
              <i className="fa fa-angle-left" />
            </a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesProducts;
