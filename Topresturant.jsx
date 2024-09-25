import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import piza from '../assets/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg'
import sweets from '../assets/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg'
import north_indian from '../assets/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg'
import ice_cream from '../assets/eillc7d7hbrzcuussus5.jpeg'
import biryani from '../assets/6e04be27387483a7c00444f8e8241108.jpeg'
import ice_cream2 from '../assets/w7ndo1dkkk6kf4qfz2p1.jpeg'
import south_indian from '../assets/f1bc9ddf53de574cdc35ab2f717df234.jpeg'
import bi_north from '../assets/919cb3be0e7406f86f6741ebe7c30128.jpeg'
import american from '../assets/535fc9f9c135f7982317bbb6a64a1ffc.jpeg'
import cake from '../assets/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg'
import Card from './Card';

function Topresturant() {
  const dataitem=[
    {
        "image": piza,
        "offer": "Items at ₹179",
        "title": "Pizza Hut",
        "rating": 4.2,
        "minTime": 30,
        "maxTime": 40,
        "name": "Pizzas",
        "place": "New Jodhpur"
    },
    {
        "image": sweets,
        "offer": "₹50 OFF ABOVE ₹199",
        "title": "Janta Sweet Home",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Sweets,South Indian",
        "place": "Shastri Nagar"
    },
    {
        "image":north_indian,
        "offer": "₹85 OFF ABOVE ₹149",
        "title": "Parihaar Bhojnalay",
        "rating": 4.3,
        "minTime": 35,
        "maxTime": 40,
        "name": "North India, Thalis",
        "place": "Sardarpura"
    },
    {
        "image":ice_cream,
        "offer": "₹70 OFF ABOVE ₹149",
        "title": "Kwality Walls Frozen",
        "rating": 4.5,
        "minTime": 25,
        "maxTime": 25,
        "name": "Desserts,Ice Cream",
        "place": "Chopsani Housing Board"
    },
    {
        "image":biryani,
        "offer": "₹1-5 OFF ABOVE ₹179",
        "title": "The Good Bowl",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image": ice_cream2,
        "offer": "₹100 OFF ABOVE ₹499",
        "title": "NIC Ice Creams",
        "rating": 4.7,
        "minTime": 25,
        "maxTime": 30,
        "name": "Desserts,Ice Cream",
        "place": "Sardarpura"
    },
    {
        "image":south_indian,
        "offer": "Items at ₹109",
        "title": "Dosh Center",
        "rating": 4.0,
        "minTime": 35,
        "maxTime": 40,
        "name": "South Indian",
        "place": "Chopsani Housing Board"
    },
    {
        "image":bi_north,
        "offer": "₹125 OFF ABOVE ₹349",
        "title": "Lunch Box - Meals and Thalis",
        "rating": 4.3,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image":american,
        "offer": "₹70 OFF ABOVE ₹249",
        "title": "McDonald's",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "American",
        "place": "Rawaton Ka Bass"
    },
    {
        "image":cake,
        "offer": "₹100 OFF ABOVE ₹449",
        "title": "Kajal's Cake",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Cake",
        "place": "Chopsani Housing Board"
    }
]
  return (
    <div  className="max-w-[1200px] m-auto">
    <div className='flex my-5 items-center justify-between '>
      <div className='text-[25px] font-bold'>Top Resturant chains in jodhpur</div>
      <div className='flex'>
        <div  className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
        <FaArrowLeft  />
        </div>
        <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
        <FaArrowRight />
        </div>
      </div>
    </div>
    <div className="flex gap-4 overflow-hidden">
    {
        dataitem.map((item,index)=>(
            <Card key={index} item={item}/>
        ))
    }
    </div>
    </div>
  )
}

export default Topresturant