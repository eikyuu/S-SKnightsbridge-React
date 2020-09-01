import React from "react";
import montre7 from "../files/montre7.jpg";

const About = (props) => {
  return (
    <section className="about">
      <div className="row about_div">
        <h1 className="about_h1 col-sm-12 mt-5">About us</h1>

        <img className="about_img col-sm-12 mt-3" src={montre7} alt="" />
        <div className="div_about_p">
          <p className="about_p col-sm-12 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
            necessitatibus ea nostrum esse? Quaerat officiis vitae eveniet
            soluta, ex, inventore exercitationem, vel dignissimos facilis fugiat
            perferendis velit quas expedita!
          </p>
        </div>

        <button className="btn about_btn">LEARN MORE</button>
      </div>
    </section>
  );
};

export default About;
