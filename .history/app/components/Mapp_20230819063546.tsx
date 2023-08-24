"use client"


import React from 'react'
import { Map, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from './Markers';
function Mapp() {
  return (
    <div>
      <h1>View your distance on the map</h1>
      <Map
            
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} 
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 8,
            }}
            style={{ width: 800, height: 600, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >

            <Markers/>
         

        </Map>

      
    </div>
  )
}

export default Mapp