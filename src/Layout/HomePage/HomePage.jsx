import React from "react";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";
import Discount from "./Components/Discount/Discount";
import NewProducts from "./Components/Product/NewProducts";
import FamousProducts from "./Components/Product/FamousProducts";

function HomePage() {
  return (
    <div>
      <Header />
      <Category />
      <Discount />
      <NewProducts />
      {/* anitaion there */}
      <FamousProducts />
      {/* animation there */}
    </div>
  );
}

export default HomePage;
