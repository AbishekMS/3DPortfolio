import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
    <NavLink to="/" className="absolute top-2 left-0 w-25 h-25 rounded-lg items-center justify-center flex text-black font-bold text-2xl"
    style={{ marginLeft: '-200px' }}>
    <p className="text-black  ">ABISHEK's <br/> WORLD</p>
    </NavLink>
    <nav className='flex text-lg gap-7 font-medium justify-end ml-auto' >
    <NavLink to="/home" className={({isActive})=>isActive?'text-blue-500':'text-black'} style={{ marginRight: '50px' }}>Home</NavLink>
    </nav>
    <nav className='flex text-lg gap-7 font-medium  justify-end '>
    <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':'text-black'} style={{ marginRight: '50px' }}>About</NavLink>
    </nav>
    <nav className='flex text-lg gap-7 font-medium justify-end'>
    <NavLink to="/projects" className={({isActive})=>isActive?'text-blue-500':'text-black'} style={{ marginRight: '50px' }}>Projects</NavLink>
    </nav>
    
    </header> 
  )
}

export default Navbar