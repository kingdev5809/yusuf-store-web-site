import React from "react";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";
import Discount from "./Components/Discount/Discount";
import NewProducts from "./Components/Product/NewProducts";
import FamousProducts from "./Components/Product/FamousProducts";
import Animation from "./Components/Animation/Animation";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container">
        <Category />
        <Discount />
        <NewProducts />
      </div>
      <Animation />
      <FamousProducts />
      {/* animation there */}
    </div>
  );
}

export default HomePage;
