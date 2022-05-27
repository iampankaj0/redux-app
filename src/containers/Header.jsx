import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header border py-3'>
      <div className="container">
        <Link to='/'>
          <h1>My Shop</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header