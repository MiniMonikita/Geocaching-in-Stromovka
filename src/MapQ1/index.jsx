import React from "react";
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

const MapQ1 = () => {
  return (
    <>
      <div className="mapmain">
        <h4 className="question">Question 1</h4>

        <Map center={{ lat: 50.1060708, lng: 14.4201706 }}>
          <Marker coords={{ lat: 50.1046003, lng: 14.4314167 }} />
        </Map>
      </div>
      <div className="bottomArea">
        {/* <img src={logo}></img> */}
        <div className="pointCounter">Monika: 0 Points </div>
      </div>
    </>
  );
};

export default MapQ1;
