import React from 'react'
import image from '../assets/img/house-banner.png'
import Left_side from '../Components/Left_side'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div  className='w-screen h-screen flex  items-center bg-[rgb(193,190,255)]'>
  
      <div className='w-1/2 h-[500px] bg-white flex mx-auto shadow-2xl rounded'>
         
   

        

      
        
          <div className=' w-[100%] px-8 py-8 lg:w-1/2'>
          <div class="flex flex-col  justify-center  items-center 	 h-full   ">
                <h1 class="text-2xl font-bold text-gray-600">Register </h1>
                <input type="text" className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='Username'  />
                <input type='text' className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='email'/>
                <input type="password" className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='Password'  />
                <input type='password' className='mt-10 pb-2 border-b border-indigo-200   focus:outline-none w-full' placeholder='confirme password'/>


                <Link  className="w-[60%]" to="/">
                <button  
                
                class="mt-10 rounded bg-indigo-400 w-[100%] px-1 py-1 text-white">Register</button>
                </Link>

          </div>
        
          </div>
          
          <Left_side
         
          
          image={image} 
         title="HomeLand." 
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius consequuntur nesciunt veritatis distinctio, magnam vero? Eum natus magnam esse."
         text="Do you have an account?"
          btn_name="Login"
          link="/HomeLand/login"
          />

        
      </div>
      
      

    </div>
  )
}

export default Login
