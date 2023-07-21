import React from "react";
import Navbar from "./navbar/Navbar";
import Hbanner from "../components/Hbanner/Hbanner";
import Introbanner from "../components/introbanner/Introbanner";
import Secondintro from "../components/secondintro/Secondintro";
import Thirdintro from "../components/third intro/Thirdintro";
import CarouselBanner from "../components/carouselone/CarouselBanner";
import CarouselTwo from "../components/carouseltwo/CarouselTwo";
import Cards from "../components/Cards/Cards";
import Perfume from "../components/perfume/Perfume";
import Categorycard from "../components/categorycards/Categorycard";
import Footerbanner from "../components/footerbanner/Footerbanner";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ cart }) {
  return (
    <>
      <div className="home">
        <Hbanner />
        <Introbanner />
        <Secondintro />
        <Thirdintro />
        <CarouselBanner />
        <CarouselTwo />
        <Cards />
        <Perfume />
        <Categorycard />
        <Footerbanner />
        <Footer />
      </div>
    </>
  );
}
