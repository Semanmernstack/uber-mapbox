"use client"


import React from 'react'
import { Map } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
function Mapp() {
  return (
    <div>
      <h1>View your distance on the map</h1>
      <Map
            
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} 
            initialViewState={{
              longitude: -130,
              latitude: 40,
              zoom: 8,
            }}
            style={{ width: 600, height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          ></Map>

      
    </div>
  )
}

export default Mapp