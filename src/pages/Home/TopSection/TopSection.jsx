import React from "react";
import slide1 from "../../../assets/images/slide-1.png";
import TopSectionSlider from "./TopSectionSlider";

function TopSection() {
  return (
    <section class="top-section">
      <div class="container">
      <div class="row">
      <TopSectionSlider/>
      </div>
      </div>
    </section>
  );
}

export default TopSection;
