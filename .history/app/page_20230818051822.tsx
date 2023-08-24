"use client"

import Image from 'next/image'
import Booking from './components/Booking'
import Mapp from './components/Mapp'
import Cars from './components/Cars'
import { useEffect, useState } from 'react'

export default function Home() {
 const [ userLocation, setUserLocation] = useState<any>()

 useEffect(() => {
  geoLocate()
 },[])

 const geoLocate = () => {
  navigator.geolocation.getCurrentPosition(function(pos){

  })
 }
  return (
    <main className="p-3 gap  ">
      <div className="grid grid-cols-1 md:grid-cols-3   ">
        <div className=" h-[80%]">
          <Booking/>
          <Cars/>

        </div>
        <div className=" col-span-2 h-screen">
          <Mapp/>
        </div>
      </div>
    </main>
  )
}
