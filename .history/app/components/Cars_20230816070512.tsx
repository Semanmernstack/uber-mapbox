import React from 'react'
import CarsLi from './CarsLi'
import Image from 'next/image'

function Cars() {
    const data = [
        {
          id: 1,
          
          value: "regular",
          pics: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png",
        },
    
        {
          id: 2,
         
          value: "vip",
          pics: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
        },
    
        {
          id: 3,
          
          value: "vvip",
          pics: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_640.jpg",
        },
    
        {
          id: 4,
          value: "classic",
          pics: "https://cdn.pixabay.com/photo/2013/07/13/11/44/car-158548_640.png",
        },  
      ]

  return (
    <div>
        {data?.map((d, index) => (
            <div key={index}>
                <Image
                    src={d.pics}
                    alt="pic"
                    height={50}
                    width={50}
                    className="object-contain "
                />
                <h2>{d.value}</h2>

               


                
            </div>
            

        ))}

    </div>
  )
}

export default Cars