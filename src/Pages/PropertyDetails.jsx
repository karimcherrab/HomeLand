import React from 'react'

import {BiBed , BiBath,BiArea} from 'react-icons/bi'

import {housesData} from "../data"

import { useParams } from 'react-router-dom'

import {Link} from 'react-router-dom'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PropertyDetails = () => {

  const {id} = useParams()
  const house = housesData.find((house)=>{
      return house.id === parseInt(id)
  })

  return (
    <div>
    <Header/>
    <section>
        <div className='container mx-auto min-h-[800px] mb-14'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>{house.name}</h2>
              <h2 className='text-lg mb-4'>{house.address}</h2>
            </div>
            <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
              <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
              <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
            </div>
            <div className='text-violet-600 text-3xl font-semibold'>${house.price}</div>

          </div>

          <div className='flex flex-col items-start lg:flex-row gap-8'>
            <div className='max-w-[768px]'>
              <div className='mb-8'>
                <img src={house.imageLg} alt=''/>
              </div>
              <div className='flex gap-x-6 mb-6 text-violet-700'>
        <div className='flex items-center gap-x-2'>
          <div className='text-2xl'><BiBed/></div>
          <div>{house.bedrooms}</div>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='text-2xl'><BiBath/></div>
          <div>{house.bathrooms}</div>
        </div>

        <div className='flex items-center  gap-x-2'>
          <div className='text-2xl'><BiArea/></div>
          <div>{house.surface}</div>
        </div>
      </div>
      <div>
        {house.description}
      </div>
            </div>

        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg 
        px-6 py-8'>
          <div className='flex  items-center gap-x-4 mb-8 '>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt=''/>
            </div>
            <div className='flex flex-col'>
            <div className='font-bold text-lg '>{house.agent.name}</div>
            <Link to="" className='text-violet-700 text-sm '>
              View Listings
            </Link>
            </div>
           
          </div>


          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-violet-700 outline-none
            rounded w-full px-4 h-14 text-sm
            '
            placeholder='Name*'
            type='text'></input>
            <input className='border border-gray-300 focus:border-violet-700 outline-none
            rounded w-full px-4 h-14 text-sm
            ' type='text'
            placeholder='Email*'

            ></input>
            <input className='border border-gray-300 focus:border-violet-700 outline-none
            rounded w-full px-4 h-14 text-sm'
            placeholder='Phone*'
            type='text'></input>

            <textarea
            
            className='border border-gray-300 focus:border-violet-700 outline-none
            resize-none rounded w-full p-4 h-36 text-sm text-gray-400
            '
            placeholder='Message*'

            type='text'></textarea>

            <div className='flex gap-x-2'>
              <button
              className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4
              text-sm w-full transition
              '
              
              >Send message</button>
              <button
              className='border border-violet-700 text-violet-700 hover:violet-500
              hover:text-violet-500 rounded p-4 text-sm  w-full transition
              '
              
              >Call</button>

            </div>


          </form>

        </div>


          </div>
        </div>
    </section>
       <Footer/>
    </div>

 
  )
}

export default PropertyDetails