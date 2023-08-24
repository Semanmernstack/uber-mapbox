"use client"


import React from 'react'
import { Map, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
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
            style={{ width: 600, height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
          <Marker longitude={-122.4} latitude={37.8} anchor="bottom" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

          </Marker>

        </Map>

      
    </div>
  )
}

export default Mapp