import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import pizza from '../assets/Pizza.jpeg'
import north_indian from'../assets/North_Indian_4.jpeg'
import dosa from '../assets/Dosa.jpeg'
import biryani from '../assets/Biryani_2.jpeg'
import cocks from '../assets/Cakes.jpeg'
import burger from '../assets/Burger.jpeg'
import chinese from '../assets/Chinese.jpeg'
import idli from '../assets/Idli.jpeg'
import khichdi from '../assets/Khichdi.jpeg'
import noddles from '../assets/Noodles.jpeg'
import paratha from '../assets/Paratha.jpeg'
import pasta from '../assets/Pasta.jpeg'
import poori from '../assets/poori.jpeg'
import poori_Veg from '../assets/Pure_Veg.jpeg'
import salad from '../assets/Salad.jpeg'
import Ice_Creams from '../assets/Ice_Creams.jpeg'
import Gulab_Jamun from '../assets/Gulab_Jamun.jpeg'
import south from '../assets/South_Indian_4.jpeg'

import chole from '../assets/Chole_Bature.jpeg'
import roll from '../assets/Rolls.jpeg'



function Category() {
const data= [
  {
      image:north_indian,
      "path": "north-indian"
  },
  {
      image: pizza,
      "path": "pizza"
  },
  {
      image: noddles,
      "path": "noodles"
  },
  {
      image: pasta,
      "path": "pasta"
  },
  {
      image: paratha,
      "path": "paratha"
  },
  {
      image: biryani,
      "path": "biryani"
  },
  {
      image: burger,
      "path": "burger"
  },
  {
      image:cocks ,
      "path": "cakes"
  },
  {
      image:chinese,
      "path": "chinese"
  },
  {
      image:chole,
      "path": "chole-bature"
  },
  {
      image:dosa,
      "path": "dost"
  },
  {
      image:Gulab_Jamun,
      "path": "gulab-jamun"
  },
  {
      image:Ice_Creams,
      "path": "ice-creams"
  },
  {
      image: idli,
      "path": "idli"
  },
  {
      image: khichdi,
      "path": "khichdi"
  },
  {
      image: poori,
      "path": "poori"
  },
  {
      image: poori_Veg,
      "path": "pure-veg"
  },
  {
      image:roll,
      "path": "rolls"
  },
  {
      image: salad,
      "path": "salad"
  },
  {
      image: south,
      "path": "south-indian"
  }
]
const [slider, setslider] = useState(0)
function handleitem(){
if(data.length-8==slider)return false;
setslider(slider+3)
}
function handleback(){
  if(data.length-8==slider)return false;
  setslider(slider-3)
  
}

  return (
    <div  className="max-w-[1200px] m-auto  ">
    <div className='flex my-5 items-center justify-between'>
      <div className='text-[25px] font-bold'>What's on your mind?</div>
      <div className='flex'>
        <div onClick={handleback} className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
        <FaArrowLeft onClick={handleback} />
        </div>
        <div onClick={handleitem} className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
        <FaArrowRight onClick={handleitem} />
        </div>
      </div>
    </div>
    <div className="flex overflow-hidden">
      {data.map((item,index)=>(
   <div key={index} className="w-[150px] shrink-0 duration-500" style={{
    transform:`translateX(-${slider*100}%)`
   }}>
    <img src={item.image} alt="" />
    
   </div>
      ))}
    </div>
    <hr className='my-6 border-[0.1px] border-black' />
    </div>
  )
}

export default Category