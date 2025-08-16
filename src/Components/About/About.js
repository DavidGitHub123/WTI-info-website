import React from 'react'
import './About.css';
import phone_home from '../../Assets/Img/phone_home.PNG'


export default function About () {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={phone_home} alt='' className='abouthome'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT THE APP</h3>
            <h2>Build a powerful vocabulary with the Words to Impress App</h2>
            <p className='about-text'>Most successful people have mastered 50 to 100 "big" words and have incorporated those words into their everyday vocabulary and writing. 
              With the Words to Impress app you can quickly identify and easily master 50 words 
              – or more words if you’re an overachiever</p>
            <p className='about-text'>Based on the best-selling vocabulary book, The Words You Should Know, you have at your fingertips the most impressive words to build your personalized vocabulary list. 
              Then master those words with challenges, games, and reminders.</p>
            <p className='about-text'>To get started, create a list words with tools in the app that analyze your everyday vocabulary and offer upgraded words with more precise meaning and impact. 
              </p>
        </div>
    </div>
  )
}

