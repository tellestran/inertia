import Carousel from "./components/Carousel";
import HomeHero from "./components/HomeHero";
import NavWrapper from "./components/NavWrapper";
import Navbar from "./components/Navbar";
import SaleNotification from "./components/SaleNotification";

export default function App() {
  return (
    <div>
      <SaleNotification />
      <Navbar />
      <NavWrapper />
      <HomeHero />
      <Carousel />
    </div>
  )
}
