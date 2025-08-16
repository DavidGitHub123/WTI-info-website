import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


export default function Home() {

  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About />
        <Title subTitle='APP FEATURES' title='How you will master words'/>
        <Programs/>
        <Title subTitle='TESTIMONIALS' title='What App Users are Saying'/>
        <Testimonials/>
        <Title subTitle='Contact' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>

  );
}
