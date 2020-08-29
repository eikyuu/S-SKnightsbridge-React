import React from "react";
import montre3 from "../files/montre3.jpg";
import montre2 from "../files/montre2.jpg";

const Discover = (props) => {
  return (
    <section className="container-fluid discover">
      <div className="row">
        <h1 className="col discover_h1">S&amp;S Knights bridge</h1>
        <div className="col-sm-12 discover_img--container discover_img1--flex">
          <img className="discover_img1" src={montre2} alt="" />
        </div>
        <div className="col-sm-12 discover_img--container ">
          <img className="discover_img2" src={montre3} alt="" />
        </div>
      </div>
      <button className="btn discover_btn">DECOUVRIR</button>
    </section>
  );
};

export default Discover;
