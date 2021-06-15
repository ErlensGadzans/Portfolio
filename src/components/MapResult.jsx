import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import MapStyle from "./MapStyle";

function Map() {
  return (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 56.94965, lng: 24.105186 }}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        styles: MapStyle,
      }}
    >
      <Marker
        position={{ lat: 56.947123, lng: 24.106816 }}
        icon={{
          url: "/Riga.png",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapResult() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
