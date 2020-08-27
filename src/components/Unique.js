import React from "react";
import montre4 from "../files/montre4.jpg";
import montre5 from "../files/montre5.jpg";
import montre6 from "../files/montre6.jpg";

const Unique = (props) => {
  return (
    <section className="container-fluid unique">
      <div className="row unique_row">
        <div className="col-12 text-center">
          <h1 className="unique_h1">Unique</h1>
        </div>
        <div className="row">
          <p className="col unique_p mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusantium doloribus, beatae voluptatem aperiam harum
            est distinctio dolores a cum voluptatibus non aliquam recusandae
            eius?
          </p>
        </div>
      </div>
      <div className="row unique_row--container">
        <div className="col unique_img">
          <img className="unique_img--size1" src={montre4} alt="" />
        </div>
        <div className="col unique_img">
          <img
            className=" unique_img--size2 d-none d-xl-block"
            src={montre5}
            alt=""
          />
        </div>
        <div className="col unique_img d-none d-xl-block">
          <img className="unique_img--size3" src={montre6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Unique;
