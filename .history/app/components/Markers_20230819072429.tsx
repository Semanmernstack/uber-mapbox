import { UserLocationContext } from '@/ContextUser'
import { DestinationCor } from '@/DestinationContext'
import { SourceCordinatesContext } from '@/SourceContext'
import React, { useContext } from 'react'
import { Marker } from 'react-map-gl'

function Markers() {
    const {cord, setCordi} = useContext<any>(SourceCordinatesContext)
    const {destinationCor, setDestinationCor} = useContext<any>(DestinationCor)
    const {  userLocation, setUserLocation} = useContext<any>(UserLocationContext)



  return (
    <div>
         <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

          </Marker>

          {cord?
          (<Marker longitude={cord?.lng} latitude={cord?.lat} anchor="bottom" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

          </Marker>):null}
          {destinationCor?
          (<Marker longitude={destinationCor?.lng} latitude={destinationCor?.lat} anchor="bottom" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

          </Marker>):null}
    </div>
  )
}

export default Markers