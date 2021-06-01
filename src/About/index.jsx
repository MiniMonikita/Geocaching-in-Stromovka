import React from "react";
import logo from "./transparent-logo--with-smile.png";
import "./style.css";

const About = () => {
  return (
    <>
      <h2 className="heading">ABOUT PROJECT</h2>
      <img className="logo-about" src={logo}></img>
      <p className="paragraph-about">
        Geocaching was built as a part of the process to successfully finish
        Czechitas Bootcamp Course.
      </p>
    </>
  );
};
export default About;
