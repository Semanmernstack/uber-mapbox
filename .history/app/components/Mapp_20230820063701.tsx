"use client"


import React, { useContext } from 'react'
import { Map, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from './Markers';
import { UserLocationContext } from '@/ContextUser';
import { DestinationCor } from '@/DestinationContext';
import { SourceCordinatesContext } from '@/SourceContext';
function Mapp() {
  const {  userLocation, setUserLocation} = useContext<any>(UserLocationContext)
  
  return (
    <div className="p-5">
      <h1 className="items-center justify-center p-2">View your distance on the map</h1>
      {userLocation?  (<Map
            
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} 
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width: 800, height: 600, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >

            <Markers/>
         

        </Map>):null
      }

      
    </div>
  )
}

export default Mapp