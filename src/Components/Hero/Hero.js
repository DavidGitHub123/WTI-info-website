import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/Img/dark-arrow.png'

export default function Hero () {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Words to Impress</h1>
        <p>The Smart App to help you Build Your Word Prowess</p>
        <button className='btn'>Go To App Stores<img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

