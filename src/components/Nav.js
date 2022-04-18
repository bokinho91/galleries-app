import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='bg-dark mb-2'>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white"></Link>
            </li>

            <li className="nav-item">
                <Link to="/register" className="nav-link text-white">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link text-white">Login</Link>
            </li>

        </ul>
    </div>
  )
}

export default Nav
