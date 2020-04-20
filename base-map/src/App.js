import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

const defaultCenter = [0, 0];
const defaultZoom = 4;

function App() {
  return (
    <div className="App">
      <Map center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;
