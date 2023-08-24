import React from 'react'

function BookingInput() {
  return (
    <div className="flex flex-col">
        <div>
            <label> where from ?</label>
            <input type="text" placeholder='enter location' 
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
        </div>

        <div>
            <label> your destination ?</label>
            <input type="text" placeholder='enter your destination' 
                className="border-1 w-full outline-none bg-gray-100 focus:border-gray-700 p-1"
            />
        </div> 
    </div>
  )
}

export default BookingInput