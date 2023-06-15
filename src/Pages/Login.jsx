import React from 'react'
import image from '../assets/img/house-banner.png'
import Left_side from '../Components/Left_side'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div  className='w-screen h-screen flex  items-center bg-[rgb(193,190,255)]'>
  
      <div className='w-1/2 h-[500px] bg-white flex mx-auto shadow-2xl rounded'>
         
         
      <Left_side image={image} 
      title="Hello World." 
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius consequuntur nesciunt veritatis distinctio, magnam vero? Eum natus magnam esse."
      text="Don't you have an account?"
       btn_name="Register"
       link="/HomeLand/signUp"
       />


        
          <div className='w-1/2 px-8 py-8 '>
          <div class="flex flex-col  justify-center  items-center 	 h-full  ">
                <h1 class="text-2xl font-bold text-gray-600">Login </h1>
                <input type="text" className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='Username'  />
                <input type='password' className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='Password'/>


                <Link  className="w-[60%]" to="/HomeLand">
                <button  
                
                class="mt-10 rounded bg-indigo-400 w-[100%] px-1 py-1 text-white">Login</button>
                </Link>
           
            </div>
          </div>


        
      </div>
      
      

    </div>
  )
}

export default Login