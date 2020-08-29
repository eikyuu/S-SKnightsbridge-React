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
        <i
          class="col mb-4 text-center fa fa-arrow-right"
          style={{ fontSize: "36px" }}
        ></i>
      </div>
      <div className="row mt-3 unique_row--container">
        <img className="unique_img--size1 col-md-3" src={montre4} alt="" />
        <img
          className=" unique_img--size2 col-md-3 d-none d-sm-block"
          src={montre5}
          alt=""
        />
        <img
          className="unique_img--size3 col-md-3 d-none d-sm-block"
          src={montre6}
          alt=""
        />
      </div>
    </section>
  );
};

export default Unique;
