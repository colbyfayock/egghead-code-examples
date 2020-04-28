import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { geosearch } from 'esri-leaflet-geocoder';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const defaultCenter = [0, 0];
const defaultZoom = 4;

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    const control = geosearch();

    control.addTo(map);

    control.on('results', handleOnSearchResuts);

    return () => {
      control.off('results', handleOnSearchResuts);
    }
  }, []);

  /**
   * handleOnSearchResuts
   * @param {object} data Results object from esri-leaflet-geocoder
   */

  function handleOnSearchResuts(data) {
    console.log('Search results', data);
  }

  return (
    <div className="App">
      <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;
