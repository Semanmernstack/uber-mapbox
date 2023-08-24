"use client"

import Image from 'next/image'
import Booking from './components/Booking'
import Mapp from './components/Mapp'
import Cars from './components/Cars'
import { useEffect, useState } from 'react'
import { UserLocationContext } from '@/ContextUser'
import { SourceCordinatesContext } from '@/SourceContext'
import { DestinationCor } from '@/DestinationContext'

export default function Home() {
 const [ userLocation, setUserLocation] = useState<any>()
 const [cord, setCordi] = useState<any>([])
  const [destinationCor, setDestinationCor] = useState<any>([])

 useEffect(() => {
  geoLocate()
 },[])

 const geoLocate = () => {
  navigator.geolocation.getCurrentPosition(function(pos){
    setUserLocation({
      lat:pos.coords.latitude,
      lng:pos.coords.longitude
    })

  })
 }
  return (
    <main className="p-3 gap  ">
      <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
      <SourceCordinatesContext.Provider value={{cord, setCordi}}>
      <DestinationCor.Provider value={{destinationCor, setDestinationCor}}>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen  ">
        <div className=" h-[80%]">
          <Booking/>
          <Cars/>

        </div>
        <div className=" col-span-2 h-screen">
          <Mapp/>
        </div>
      </div>
      </DestinationCor.Provider>
      </SourceCordinatesContext.Provider>

      </UserLocationContext.Provider>
      
    </main>
  )
}
