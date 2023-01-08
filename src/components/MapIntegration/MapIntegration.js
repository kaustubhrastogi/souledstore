import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const MapIntegration = ({ currentLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <GoogleMap
        zoom={10}
        center={currentLocation}
        mapContainerStyle={{ height: "65vh", width: "100%" }}
      >
        <MarkerF position={currentLocation} />
      </GoogleMap>
    );
  }
};

export default MapIntegration;