import React from 'react'
import logo from '../img/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="center">
      <Link to="/" >
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Header
