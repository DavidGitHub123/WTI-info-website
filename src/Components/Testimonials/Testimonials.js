import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/Img/next-icon.png'
import back_icon from '../../Assets/Img/back-icon.png'
import user_1 from '../../Assets/Img/user-1.png'
import user_2 from '../../Assets/Img/user-2.png'
import user_3 from '../../Assets/Img/user-3.png'
import user_4 from '../../Assets/Img/user-4.png'

export default function Testimonials () {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Shiela</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>Love this app. Tons of great words. I can create a small list and master those words. Used the notifications to remind me to take quizzes and play games.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='' />
                            <div>
                                <h3>William</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>I always knew I should have a better vocabulary to help me in my career. I like these words. They seem to be the "practical" big words that I have seen all my life. I check out the Word of the Day every day. If I don't know it, I add it to one of my lists.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Melissa</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>The games are fun to play. You see your score and can try to beat it. Easiest vocab app I've seen.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Desmond</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>I used Build My List to create my first list. I just pasted in some of my writing and in seconds had a list of words related to the small words I use.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

