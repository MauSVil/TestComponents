import React from 'react';
import MapContainer from './components/MapContainer'
import MapContainerReact from './components/MapContainerReact/MapContainerReact'
import './App.css';

function App() {
  return (
    <div className="App">
      <MapContainerReact isMarkerShown/>
      {/* hola */}
    </div>
  );
}

export default App;
