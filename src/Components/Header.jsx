import React from 'react'
import logo from '../assets/img/logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
        <div className='container mx-auto flex  justify-between items-center  '>
            <Link to="/">
                <img src={logo} alt='logo'></img>
            </Link>

            <div className='flex items-center gap-6'>
                <Link className='hover:text-violet-900 transition' to="/HomeLand/login">Log in</Link>  
                <Link className='bg-violet-700 hover:text-violet-800
                 text-white  py-2 px-4 rounded-lg ' to="/HomeLand/signUp" >Sign up</Link>    

            </div>
            
        </div>

       
    </header>

  )
}

export default Header