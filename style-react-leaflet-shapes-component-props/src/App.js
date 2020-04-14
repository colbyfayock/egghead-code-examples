import React from 'react';
import { Map, TileLayer, Polygon, Circle } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

import {
  animalKingdomPolygon,
  hollywoodStudiosPolygon,
  blizzardBeachPolygon,
  epcotCenter,
  magicKingdomCenter
} from './data';

const location = [ 28.385, -81.572 ];
const zoom = 13;

function App() {
  return (
    <div className="App">
      <Map center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Polygon color="green" weight={10} opacity={.8} positions={animalKingdomPolygon} />
        <Polygon color="red" dashArray="4" positions={blizzardBeachPolygon} />
        <Polygon color="blue" fillColor="cyan" positions={hollywoodStudiosPolygon} />
        <Circle color="magenta" stroke={false} fillOpacity={.8} center={epcotCenter} radius={400} />
        <Circle color="yellow" opacity={1} fillOpacity={.6} fillColor="cyan" dashArray={12} center={magicKingdomCenter} radius={400} />
      </Map>
    </div>
  );
}

export default App;
