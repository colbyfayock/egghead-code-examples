import React, { useRef, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const defaultCenter = [0, 0];
const defaultZoom = 4;

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.on('fullscreenchange', handleOnToggleFullscreen);
  }, []);

  function handleOnToggleFullscreen() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    console.log(`Fullscreen: ${map.isFullscreen() ? 'yes' : 'no'}`);
  }

  return (
    <div className="App">
      <Map ref={mapRef} fullscreenControl={true} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;
