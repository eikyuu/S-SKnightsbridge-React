import React from "react";
import Navbar from "../components/Navbar";
import Discover from "../components/Discover";
import Unique from "../components/Unique";
import About from "../components/About";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <Discover />
      <Unique />
      <About />
    </>
  );
};

export default HomePage;
