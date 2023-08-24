import Image from 'next/image'
import Booking from './components/Booking'
import Map from './components/Map'

export default function Home() {
  return (
    <main className="p-3 gap ">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="">
          <Booking/>

        </div>
        <div className=" bg-red-700 col-span-2">
          <Map/>
        </div>
      </div>
    </main>
  )
}
