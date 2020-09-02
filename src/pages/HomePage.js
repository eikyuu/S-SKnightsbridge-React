import React from "react";
import Navbar from "../components/Navbar";
import Discover from "../components/Discover";
import Unique from "../components/Unique";
import About from "../components/About";
import EmblaCarousel from "../components/EmblaCarousel";

const SLIDE_COUNT = 12;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <Discover />
      <Unique />
      <About />
      <EmblaCarousel slides={slides} />
    </>
  );
};

export default HomePage;
