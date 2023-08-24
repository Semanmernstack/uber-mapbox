"use client"

import React, { useEffect, useState } from 'react'

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
  return (
    <div className="flex flex-col gap-3">
        <div>
            <label> where from ?</label>
            <input type="text" placeholder='enter location'
                value={where} 
                onChange={(e) => setWhere(e.target.value)}
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
            {lists?.suggestions? 
                <div >
                    {lists?.suggestions.map((item:any, index:number) => (
                        <h2 onClick={() =>{ setWhere(item.full_address), setLists([])}} 
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
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
            {lists?.suggestions? 
                <div >
                    {lists?.suggestions.map((item:any, index:number) => (
                        <h2 onClick={() =>{ setTo(item.full_address), setLists([])}} 
                         >{item.full_address}</h2>
                    ))}
                </div> : null

            }

        </div> 
    </div>
  )
}

export default BookingInput