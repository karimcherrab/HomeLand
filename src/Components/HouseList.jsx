import React, { useContext } from 'react'
import { HouseContext } from '../utils/HouseContext'
import {Link} from 'react-router-dom'
import {ImSpinner2} from 'react-icons/im'
import House from './House'
const HouseList = () => {
    const {houses , loading} = useContext(HouseContext)

    if(loading){
        return (
            <ImSpinner2  className='mx-auto my-40 animate-spin text-violet-700
            text-4xl '></ImSpinner2>
        )
    }
    if(houses.length < 1 ){
        return <div className='text-center text-3xl text-gray-400 my-40'>Sorry, nothing found</div>
    }
  return (
    <section className='mb-20 mt-10'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 '>
                {
                    houses.map((house , index)=>{
                        return(
                            <Link  to={`/property/${house.id}`} key={index}>
                                <House house={house}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default HouseList