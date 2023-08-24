import Image from 'next/image'
import Booking from './components/Booking'

export default function Home() {
  return (
    <main className="p-3 gap h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="">
          <Booking/>

        </div>
        <div className=" bg-red-700 col-span-2">
          <h1>ff</h1>
        </div>
      </div>
    </main>
  )
}
