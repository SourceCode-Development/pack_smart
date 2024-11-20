import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const exampleProducts = [
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-2.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-3.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-2.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-3.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-2.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-4.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-1.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-4.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-3.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  {
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/product-2.png",
    rating: 4,
    price: 99.5,
    originalPrice: 1128.0,
  },
  // Add more product objects here...
];
function ProductsGridView() {
  return (
    <div className="row">
      {exampleProducts.map((product, item) => {
        return <ProductCard product={product} key={item} />;
      })}
    </div>
  );
}

export default ProductsGridView;
