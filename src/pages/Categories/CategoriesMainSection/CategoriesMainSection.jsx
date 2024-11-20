import React from "react";
import CategoriesFilters from "../CategoriesFilters/CategoriesFilters";
import CategoriesProducts from "../CategoriesProducts/CategoriesProducts";

function CategoriesMainSection() {
  return (
    <>
      <section className="product-sec">
        <div className="container">
          <div className="row">
            <CategoriesFilters />
            <CategoriesProducts />
          </div>
        </div>
      </section>
    </>
  );
}
export default CategoriesMainSection;
