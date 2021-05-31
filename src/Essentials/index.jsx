import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./journey-transparent.png";
import "./style.css";
// import useGeolocation from "react-hook-geolocation";

const Essentials = () => {
  // const geolocation = useGeolocation();

  return (
    <>
      <h2 className="heading">Geocache Essentials</h2>
      <div className="paragraph-essentials">
        <p>GPS tracking turned on & fully charged battery</p>
        <p>Pen & Paper</p>
        <p>Water & Snacks</p>
        {/* <p>
          {!geolocation.error ? (
            <p style={{ color: "green", fontSize: "0.7rem" }}>
              GPS: Approved and at work! <p></p>
            </p>
          ) : (
            <p style={{ color: "red", fontSize: "0.7rem" }}>
              GPS: Not working...Please enable it and try again!
            </p>
          )}
        </p> */}
      </div>

      <img className="logo-essentials" src={logo}></img>

      <Link style={{ textDecoration: "none" }} to="/rules">
        <button className="btn-essentials">Next</button>
      </Link>
    </>
  );
};
export default Essentials;