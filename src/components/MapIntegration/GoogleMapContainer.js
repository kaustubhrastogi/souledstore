import React, { useEffect, useState } from "react";
import MapIntegration from "./MapIntegration";

function GoogleMapContainer() {
  // By Default it is taking London's Current Location
  const [currentLocation, setCurrentLocation] = useState({
    lat: 19.076,
    lng: 72.8777,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  });
  return (
    <div>
      <MapIntegration currentLocation={currentLocation} />
    </div>
  );
}

export default GoogleMapContainer;
