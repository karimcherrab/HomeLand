import React from 'react'
import {Link} from 'react-router-dom'
const Left_side = ({image , title , desc , text , btn_name,link}) => {
  return (
    <div 
    style= 
    {{ 
      backgroundImage: `linear-gradient(rgba(39,11,96,0.5), rgba(39,11,96,0.5) ),url(${image}) `  
     }} 
  className='w-1/2 h-full bg-cover bg-center	 
  bg-no-repeat px-5 py-5 text-white rounded shadow-xl
  ' 
  >
  <div class="flex flex-col  justify-center  h-full  ">
  <h1 class="text-5xl font-bold">{title}</h1>
    <p class="mt-5 text-sm">{desc}</p>
    <p class="mt-5 text-sm">{text}</p>
    <Link to={link}>
    <button class="mt-5 rounded bg-indigo-400 w-[60%] px-1 py-1">{btn_name}</button>

    </Link>
  </div>

</div>
  )
}

export default Left_side


