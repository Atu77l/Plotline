import React from 'react'
import './Navbar.css'
import Image from './triangle.jpg';

function Navbar() {
  return (
    <div className="nav">
        <img src={Image} className="img" alt="triangle"/>
        <p className="word">Data</p>
    </div>
  )
}

export default Navbar