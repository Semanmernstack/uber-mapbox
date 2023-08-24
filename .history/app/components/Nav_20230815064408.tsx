import { UserButton, currentUser } from '@clerk/nextjs'
import React from 'react'

async function Nav() {
    const user = await currentUser()
  return (
    <div className="flex items-center justify-between p-4 bg-lime-400">
        <div className="flex items-center gap-2">
            
            <h1 className="font-extrabold shadow-2xl border-gray-200 border-2 p-1 font-serif text-2xl md:text-3xl lg:text-4xl animate-pulse text-blue-900">P<span className="text-lg animate-none font-bold text-red-800">ride</span></h1>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Help</h2>
            
        </div>
        <div className="flex gap-1">
            <h1>Welcome</h1>
            <h1 className='hidden md:inline-flex'>{user?.firstName}</h1>
            <UserButton/>
        </div>
    </div>
  )
}

export default Nav