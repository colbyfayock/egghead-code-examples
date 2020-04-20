import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer, LayerGroup, FeatureGroup, Circle } from 'react-leaflet';

const defaultCenter = [38.8972, -77.0369];
const defaultZoom = 14;

const whiteHouse = [38.8977, -77.0365];
const eisenhowerOffice = [38.898093, -77.038540];
const washingtonMonument = [38.8895, -77.0353];
const lincolnMemorial = [38.8893, -77.0502];
const worlwarTwoMemorial = [38.8894, -77.0405];
const jeffersonMemorial = [38.8814, -77.0365];

function App() {
  return (
    <div className="App">
      <Map center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <LayerGroup>
          <Circle center={whiteHouse} color="red" radius={200} />
          <Circle center={eisenhowerOffice} color="green" radius={100} />
        </LayerGroup>
        <FeatureGroup color="blueviolet">
          <Circle center={washingtonMonument} color="red" radius={100} />
          <Circle center={lincolnMemorial} color="blue" radius={100} />
          <Circle center={worlwarTwoMemorial} color="green" radius={100} />
          <Circle center={jeffersonMemorial} color="purple" radius={100} />
        </FeatureGroup>
      </Map>
    </div>
  );
}

export default App;
