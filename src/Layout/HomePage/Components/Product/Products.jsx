import React from "react";
import ProductsItem from "./ProductsItem";

function Products() {
  let data = [];
  return (
    <div className="products">
      {data.map((card) => (
        <ProductsItem card={card} />
      ))}
    </div>
  );
}

export default Products;
