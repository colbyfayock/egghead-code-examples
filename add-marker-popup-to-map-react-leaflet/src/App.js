import React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

// Importing images from locally stored assets to address a bug
// in CodeSandbox: https://github.com/codesandbox/codesandbox-client/issues/3845

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./images/marker-icon-2x.png'),
  iconUrl: require('./images/marker-icon.png'),
  shadowUrl: require('./images/marker-shadow.png')
});

// When importing into your own app outside of CodeSandbox, you can import directly
// from the leaflet package like below
//
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

const location = [38.9072, -77.0369];
const zoom = 12;

function App() {
  return (
    <div className="App">
      <Map center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={location}>
          <Popup>Hello, Washington, DC</Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default App;
