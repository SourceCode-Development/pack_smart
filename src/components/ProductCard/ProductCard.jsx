import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="product-card">
        <div className="product-img">
          <Link to={"/product"} href="product-detail">
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="desc">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-0">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa ${
                    i < product.rating ? "fa-star" : "fa-star-o"
                  }`}
                />
              ))}
              <span>{product.rating}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="#">
                <img src="/images/cart.png" alt="Cart" />
              </a>
              <a href="#">
                <img src="/images/heart-icon.png" alt="Wishlist" />
              </a>
            </div>
          </div>
          <span className="price">
            ${product.price} <del>${product.originalPrice}</del>
          </span>
          <p>{product.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
