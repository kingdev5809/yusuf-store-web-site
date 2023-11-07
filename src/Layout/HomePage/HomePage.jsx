import React from "react";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";
import Discount from "./Components/Discount/Discount";
import NewProducts from "./Components/Product/NewProducts";
import FamousProducts from "./Components/Product/FamousProducts";
import Animation from "./Components/Animation/Animation";
import Animation2 from "./Components/Animation/Animation2";

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
      <Animation2 />
    </div>
  );
}

export default HomePage;
