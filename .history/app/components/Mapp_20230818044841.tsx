"use client"


import React from 'react'
import { Map } from 'react-map-gl';
function Mapp() {
  return (
    <div>
      <h1>View your distance on the map</h1>
      <Map
            
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} 
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 14,
            }}
            style={{ width: 600, height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          ></Map>

      
    </div>
  )
}

export default Mapp