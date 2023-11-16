import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import SaleNotification from "./components/SaleNotification";
import NavWrapper from "./components/NavWrapper";
import Carousel from "./components/Carousel";
import FrontPageEditorial from "./components/FrontPageEditorial";
import FrontPagePick from "./components/FrontPagePick";
import FrontPageCover from "./components/FrontPageCover";
import FrontPageShopProducts from "./components/FrontPageShopProducts";
import FrontPageSubcribe from "./components/FrontPageSubcribe";
import Footer from "./components/Footer";

const App = () => {
  // const [theme, setTheme] = useState("light"); // Default theme is light

  // // Switch the theme
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  // // Apply the theme class to the body
  // useEffect(() => {
  //   document.body.className = theme + "-theme";
  // }, [theme]);
  return (
    <div className="">
      <SaleNotification />
      <Navbar />
      <NavWrapper />
      <HomeHero />
      <Carousel />
      <FrontPageEditorial />
      <FrontPagePick />
      <FrontPageCover />
      <FrontPageShopProducts />
      <FrontPageSubcribe />
      <Footer />
      {/* <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>{" "} */}
    </div>
  );
};

export default App;
