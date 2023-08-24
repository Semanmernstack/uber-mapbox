"use client"

import React, { useEffect, useState } from 'react'

const session_token='5ccce4a4-ab0a-4a7c-943d-580e55542363'
const MAPBOX_GETBACK_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'

function BookingInput() {
    const [where, setWhere] = useState<any>()
    const [to, setTo] = useState<any>()
    const [lists, setLists] = useState<any>([])

    useEffect(() => {
        getAdress()

    }, [where, to])

    const getAdress = async () => {
        setLists([])
        const res = await fetch('api/search-map?q='+where, {
            headers:{
                "Content-Type": "application/json",
            }

        })
        const re = await res.json()
        setLists(re)

    }
    const z = async (item:any) => {
        setWhere(item.full_address), setLists([])
        const res = await fetch(MAPBOX_GETBACK_URL+item.mapbox_id+
            "?session_token="+session_token
            +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_TOKEN

        )
        const result = await res.json()
        console.log(result)

    }
  return (
    <div className="flex flex-col gap-6 relative">
        <div>
            <label> where from ?</label>
            <input type="text" placeholder='enter location'
                value={where} 
                onChange={(e) => setWhere(e.target.value)}
                className="border-1 w-full text-sm outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
            {lists?.suggestions? 
                <div >
                    {lists?.suggestions.map((item:any, index:number) => (
                        <h2 className='text-sm cursor-pointer gap-1 shadow-2xl' onClick={() =>{ setWhere(item.full_address), setLists([])}} 
                         >{item.full_address}</h2>
                    ))}
                </div> : null

            }
            
            
        </div>

        <div>
            <label> your destination ?</label>

            <input type="text" placeholder='enter your destination' 
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border-1 w-full text-sm outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
            {lists?.suggestions? 
                <div >
                    {lists?.suggestions.map((item:any, index:number) => (
                        <h2 className='text-sm cursor-pointer shadow-2xl' onClick={() =>{ z(item)}} 
                         >{item.full_address}</h2>
                    ))}
                </div> : null

            }

        </div> 
    </div>
  )
}

export default BookingInput