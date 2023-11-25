import React,  { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeHero from "./components/home /HomeHero";
import SaleNotification from "./components/SaleNotification";
import NavWrapper from "./components/NavWrapper";
import Carousel from "./components/home /Carousel";
import FrontPageEditorial from "./components/home /FrontPageEditorial";
import FrontPagePick from "./components/home /FrontPagePick";
import FrontPageCover from "./components/home /FrontPageCover";
import FrontPageShopProducts from "./components/home /FrontPageShopProducts";
import FrontPageSubcribe from "./components/home /FrontPageSubcribe";
import Footer from "./components/Footer";
import EntryHead from "./components/feature/EntryHead"
import EntryThumbnail from "./components/feature/EntryThumbnail";

const App = () => {
  const [theme, setTheme] = useState("light-theme"); // Default theme is light

  // Switch the theme
  const toggleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  // Apply the theme class to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="">
      <SaleNotification />
      <Navbar />
      <NavWrapper />
      {/* <HomeHero />
      <Carousel />
      <FrontPageEditorial />
      <FrontPagePick />
      <FrontPageCover />
      <FrontPageShopProducts />
      <FrontPageSubcribe /> */}
      <EntryHead />
      <EntryThumbnail />
      <Footer />
      <button onClick={toggleTheme}>
        {theme === "light-theme" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>{" "}
    </div>
  );
};

export default App;
