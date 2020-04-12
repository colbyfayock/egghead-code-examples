import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

const magicKingdomLatLng = [28.3852, -81.5639];

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    setTimeout(() => {
      map.flyTo(magicKingdomLatLng, 14, {
        duration: 3
      });
    }, 1000)
  }, [])

  return (
    <div className="App">
      <Map ref={mapRef} center={[39.50, -98.35]} zoom={4}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;
