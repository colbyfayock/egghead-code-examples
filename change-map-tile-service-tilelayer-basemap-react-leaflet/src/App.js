import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

const defaultCenter = [-25.2744, 133.7751];
const defaultZoom = 4;

function App() {
  return (
    <div className="App">
      <Map center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
          attribution="&copy; NASA Blue Marble, image service by OpenGeo"
          maxNativeZoom={8}
        />
      </Map>
    </div>
  );
}

export default App;
