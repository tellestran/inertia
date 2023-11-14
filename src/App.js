import React, { useState } from "react";
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
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
    </ThemeContext.Provider>
  );
}

export default App();
