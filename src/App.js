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

export default function App() {
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
  )
}
