import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import FrontPageCover from "./components/FrontPageCover";
import FrontPageEditorial from "./components/FrontPageEditorial";
import FrontPagePick from "./components/FrontPagePick";
import FrontPageShopProducts from "./components/FrontPageShopProducts";
import FrontPageSubcribe from "./components/FrontPageSubcribe";
import HomeHero from "./components/HomeHero";
import NavWrapper from "./components/NavWrapper";
import Navbar from "./components/Navbar";
import SaleNotification from "./components/SaleNotification";
import Footer from "./components/Footer";

export const ThemeContext = React.createContext(null);
function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, []);

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };


  return (
      <div>
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
      </div>
  );
}

export default App();
