import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='flex justify-between p-3 bg-slate-100 items-center'>
          <Link to="/"><div>Mern</div></Link>
          <ul className='flex gap-4'>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"> <li>About</li></Link>
              <Link to="/profile"><li>Profile</li></Link>
              <Link to="/sign-in">Sign in</Link>
          </ul>
      </div>
      
  )
}

export default Navbar