import React from "react";
import useGeolocation from "react-hook-geolocation";

const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation();

  //*PositionOptions*//
  // const geolocation = useGeolocation({
  //   enableHighAccuracy: true,
  //   maximumAge: 15000,
  //   timeout: 12000,
  // });

  /*CALLBACK FUNCTION OVER AND OVER*/
  // const onGeolocationUpdate = (geolocation) => {
  //   console.log("Here’s some new data from the Geolocation API: ", geolocation);
  // };

  // const geolocation = useGeolocation({}, onGeolocationUpdate);

  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
      <li>Location accuracy: {geolocation.accuracy}</li>
      <li>Altitude: {geolocation.altitude}</li>
      <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
      <li>Heading: {geolocation.heading}</li>
      <li>Speed: {geolocation.speed}</li>
      <li>Timestamp: {geolocation.timestamp}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
};

export default ComponentWithGeolocation;
