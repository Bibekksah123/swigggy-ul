import React from 'react'

function Card({item}) {
  return (
    <div className="w-[273px] shrink-0 grow m-auto">
      <div className='h-[182px] overflow-hidden rounded-[15px] relative'>
        <img className='object-contain w-full h-full' src={item.image} alt="" />
        <div className="img-overlay w-full h-full absolute top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {item.offer}
        </div>
      
      </div>
      <div className='mt-2 text-[18px] font-bold'>{item.title}</div>
      <div className=''>⭐{item.rating}
         <span className='ml-1'>{item.minTime}-{item.maxTime}mins</span>
         </div>
    </div>
  )
}

export default Card