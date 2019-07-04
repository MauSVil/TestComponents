import React from 'react';
import MapContainer from './components/MapContainer'
import MapContainerReact from './components/MapContainerReact/MapContainerReact'
import MapReact from './components/MapReact'
import { withScriptjs } from "react-google-maps";
import './App.css';

function App() {
  const MapLoader = withScriptjs(MapReact);
  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ3Fn5Yo1bJ8khQdmkxHycWCWqjV9GjgE"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default App;
