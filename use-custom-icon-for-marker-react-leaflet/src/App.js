import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

import nationalParks from './national-parks.json';
import treeMarker from './images/tree-marker.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    const parkIcon = new L.Icon({
      iconUrl: treeMarker,
      iconSize: [26, 26],
      popupAnchor: [0, -15],
      shadowUrl: markerShadow,
      shadowAnchor: [13, 28]
    });

    const parksGeojson = new L.GeoJSON(nationalParks, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          icon: parkIcon
        });
      },
      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature;
        const { Name } = properties;

        if ( !Name ) return;

        layer.bindPopup(`<p>${Name}</p>`);
      }
    });

    parksGeojson.addTo(map);
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
