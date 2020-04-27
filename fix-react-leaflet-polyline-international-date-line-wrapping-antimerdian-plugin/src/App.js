import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Polyline as WrappedPolyline } from 'leaflet.antimeridian/src/vector/Wrapped.Polyline.js';
import './App.css';
import 'leaflet/dist/leaflet.css';

import santaStops from './santa-stops.json';

const defaultCenter = [0, 0];
const defaultZoom = 4;

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    const santaRoute = new WrappedPolyline( santaStops, {
      weight: 2,
      color: 'red',
      opacity: 1,
      fillColor: 'red',
      fillOpacity: 0.5
    });

    santaRoute.addTo(map);
  }, [])

  return (
    <div className="App">
      <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;
