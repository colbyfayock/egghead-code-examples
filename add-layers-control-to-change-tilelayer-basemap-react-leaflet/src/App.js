import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer, LayersControl } from 'react-leaflet';

const { BaseLayer } = LayersControl;

function App() {
  return (
    <div className="App">
      <Map center={[27.9881, 86.9250]} zoom={6}>
        <LayersControl>
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </BaseLayer>
          <BaseLayer name="NASA Gibs Blue Marble">
            <TileLayer
              url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
              attribution="&copy; NASA Blue Marble, image service by OpenGeo"
              maxNativeZoom={8}
            />
          </BaseLayer>
        </LayersControl>
      </Map>
    </div>
  );
}

export default App;
