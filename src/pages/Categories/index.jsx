import React, { useEffect } from "react";
import CategoriesMainSection from "./CategoriesMainSection/CategoriesMainSection";

function Category() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  
  return (
    <>
      <CategoriesMainSection />
    </>
  );
}

export default Category;
