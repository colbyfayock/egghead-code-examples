import React from 'react';
import { Map, TileLayer, Polygon, Circle } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

const location = [ 28.365724898272077, -81.55254364013672 ];
const zoom = 14;

const hollywoodStudiosPolygon = [
  [
    [ 28.35390453844, -81.56443119049 ],
    [ 28.35390453844, -81.55619144439 ],
    [ 28.35983376526, -81.55619144439 ],
    [ 28.35983376526, -81.56443119049 ],
    [ 28.35390453844, -81.56443119049 ],
  ]
];

const epcotCenter = [ 28.373711392892478, -81.54936790466309 ];

function App() {
  return (
    <div className="App">
      <Map center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Polygon color="blue" positions={hollywoodStudiosPolygon} />
        <Circle color="magenta" center={epcotCenter} radius={400} />
      </Map>
    </div>
  );
}

export default App;
