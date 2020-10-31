import React from "react";
import montre4 from "../files/montre4.jpg";
import montre5 from "../files/montre5.jpg";
import montre6 from "../files/montre6.jpg";

const Unique = (props) => {
  return (
    <section className="container-fluid unique">
      <div className="row unique_row">
        <div className="col-12 text-center">
          <h1 className="unique_h1 mb-5">Unique</h1>
        </div>
        <i
          className="col-sm-12 mb-4 text-center fa fa-arrow-right"
          style={{ fontSize: "36px" }}
        ></i>
        <div className="row mx-auto">
          <p className="col-sm-12 unique_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusantium doloribus, beatae voluptatem aperiam harum
            est distinctio dolores a cum voluptatibus non aliquam recusandae
            eius?
          </p>
        </div>
      </div>
      <div className="row mt-3 unique_row--container">
        <img
          className="unique_img--size1 unique_image--position1 col-md-2"
          src={montre4}
          alt=""
        />
        <img
          className=" unique_img--size2 unique_image--position2 col-md-3 d-none d-sm-block"
          src={montre5}
          alt=""
        />
        <img
          className="unique_img--size3 unique_image--position3 col-md-2 d-none d-xl-block"
          src={montre6}
          alt=""
        />
      </div>
    </section>
  );
};

export default Unique;
