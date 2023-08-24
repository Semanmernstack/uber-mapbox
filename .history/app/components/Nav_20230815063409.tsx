import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Nav() {
  return (
    <div className="flex items-center justify-between p-4 bg-lime-400">
        <div className="flex items-center gap-2">
            
            <h1 className="font-extrabold font-serif text-2xl">P<span>ride</span></h1>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Help</h2>
        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default Nav