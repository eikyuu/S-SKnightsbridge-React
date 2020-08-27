import React from "react";
import Navbar from "../components/Navbar";
import Discover from "../components/Discover";
import Unique from "../components/Unique";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <Discover />
      <Unique />
    </>
  );
};

export default HomePage;
