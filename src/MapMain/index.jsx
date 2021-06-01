import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Map,
  MarkerLayer,
  Marker,
  CompassControl,
  MouseControl,
  KeyboardControl,
  ZoomControl,
} from "react-mapycz";
import "./style.css";
import logo from "../img/logo-kids.png";
import useGeolocation from "react-hook-geolocation";

const MapMain = ({ usernameW }) => {
  const geolocation = useGeolocation();

  /* ked necham zapnuty callback tak bude stale vyskakovat okno - ako sa ho zbavit?*/
  // const onGeolocationUpdate = (geolocation) => {
  //   console.log("Here’s some new data from the Geolocation API: ", geolocation);
  // };

  // const geolocation = useGeolocation({}, onGeolocationUpdate);

  return (
    <>
      <p>
        <li>Latitude: {geolocation.latitude}</li>
        <li>Longitude: {geolocation.longitude}</li>
      </p>
      <div className="mapmain">
        <h4 className="question">Starting position...</h4>
        <Map center={{ lat: geolocation.latitude, lng: geolocation.longitude }}>
          <CompassControl right={10} top={50} />
          <MouseControl zoom={true} pan={true} wheel={true} />
          <ZoomControl />
          <KeyboardControl />
          <MarkerLayer>
            <Marker
              coords={{ lat: geolocation.latitude, lng: geolocation.longitude }}
            />
            <Marker coords={{ lat: 50.10476, lng: 14.4313575 }} />
          </MarkerLayer>
        </Map>
      </div>
      <div className="bottomArea">
        <img className="logo-mapmain" src={logo}></img>
        <div className="pointCounter">{usernameW}: 0 Points </div>
        <Link style={{ textDecoration: "none" }} to="/geolocation">
          <p className="hint">Hint: Your geolocation right now is:</p>
        </Link>
      </div>
    </>
  );
};

export default MapMain;
