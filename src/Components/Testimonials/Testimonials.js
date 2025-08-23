import React from "react";
import "./Testimonials.css";
import user_3 from "../../Assets/Img/user-3.png";
import test_carlos from "../../Assets/Img/test_carlos.png";
import test_cristobal from "../../Assets/Img/test_cristobal.png";
import test_aiden from "../../Assets/Img/test_aiden.png";
import test_briella from "../../Assets/Img/test_briella.png";
import test_christ from "../../Assets/Img/test_christ.png";
import test_carter from "../../Assets/Img/test_carter.png";
import test_david from "../../Assets/Img/test_david.png";
import test_nico from "../../Assets/Img/test_nico.png";
import test_otil from "../../Assets/Img/test_otil.png";

export default function Testimonials() {
  // const slider = useRef();
  // let tx = 0;

  // const slideForward = ()=>{
  //     if(tx > -50){
  //         tx -= 25;
  //     }
  //     slider.current.style.transform = `translateX(${tx}%)`;
  // }

  // const slideBackward = ()=>{
  //     if(tx < 0){
  //         tx += 25;
  //     }
  //     slider.current.style.transform = `translateX(${tx}%)`;
  // }

  return (
    <div className="testimonials">
      {/* <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/> */}
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="app user" />
                <div>
                  <h3>Shiela</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                Love this app. Tons of great words. I took the challenge to
                master 50 words. I speak and write better from using the app.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_cristobal} alt="app user" />
                <div>
                  <h3>Cristobal</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                English is my second language. I was able to make a list of new
                words I wanted to learn. I play the games everyday to reinforce
                the words.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_david} alt="app user" />
                <div>
                  <h3>David</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I use the words I have learned through the app in my job and
                people tell me they've noticed my big words.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_aiden} alt="app user" />
                <div>
                  <h3>Aiden</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I set the notifications on the app so I can take daily quizzes.
                This has really helped me increased my vocabulary prowess.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_christ} alt="app user" />
                <div>
                  <h3>Christian</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I like how the app tracks your progress. I like to see the
                percentage of mastered words increase. It makes it easy to
                master words.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_briella} alt="app user" />
                <div>
                  <h3>Briella</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I've always wanted a better vocabulary. The app helps me learn
                lots of new words and its fun.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_carlos} alt="app user" />
                <div>
                  <h3>Carlos</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                Great app. Everything you need to increase your vocabulary is
                right there.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_carter} alt="app user" />
                <div>
                  <h3>carter</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I like the social settings feature. Based on your situation,
                look up words to impress. It's really helped me in my dating.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_otil} alt="app user" />
                <div>
                  <h3>Otilik</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                I'm on the management track at work. Effective communication is
                important. This app makes it easy to learn new words.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={test_nico} alt="app user" />
                <div>
                  <h3>Nico</h3>
                  {/* <span>Edusity, USA</span> */}
                </div>
              </div>
              <p className="testimonial">
                English is my second language. In my career path, these words
                will make me a better communicator. App is easy to use and fun.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
