import React from 'react'
import myPic from '../assets/images/guy-stylish.png'

function MyFigure() {
  return (
    <div className='pr-44 flex items-end relative'>
      <figure>
        <img src={myPic} alt="Charles Kasasira" className='z-10' />
      </figure>

      <div className='bg-[#EDA751] w-96 h-96 lg:w-[1000px] lg:h-[1000px] rounded-full absolute -right-32 -bottom-80 -z-10'>
      </div>

      
    </div>
  )
}

export default MyFigure