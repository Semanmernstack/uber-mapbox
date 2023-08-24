import React, { useState } from 'react'

function BookingInput() {
    const [where, setWhere] = useState<any>()
    const [to, setTo] = useState<any>()
  return (
    <div className="flex flex-col">
        <div>
            <label> where from ?</label>
            <input type="text" placeholder='enter location'
                value={where} 
                onChange={(e) => setWhere(e.target.value)}
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
        </div>

        <div>
            <label> your destination ?</label>

            <input type="text" placeholder='enter your destination' 
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
        </div> 
    </div>
  )
}

export default BookingInput