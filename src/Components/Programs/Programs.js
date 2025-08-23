import React from "react";
import "./Programs.css";
import gallery1 from "../../Assets/Img/gallery1.png";
import gallery2 from "../../Assets/Img/gallery2.png";
import gallery3 from "../../Assets/Img/gallery3.png";
import gallery4 from "../../Assets/Img/gallery4.png";
import gallery5 from "../../Assets/Img/gallery5.png";
import gallery6 from "../../Assets/Img/gallery6.png";

export default function Programs() {
  return (
    <div className="">
      <div className="programs">
        <div className="program">
          <h2 className="captionHead">Test Your Vocab Level</h2>
          <img className="block" src={gallery1} alt="students at computer" />
          <div className="caption">
            <p>
              Take the 25 question quiz to see the strength of your vocabulary.
              Levels include: Expert, Advanced, Intermediate, Basic, or Novice.
            </p>
          </div>
        </div>

        <div className="program">
          <h2 className="captionHead">Anazyle Your Vocabulary</h2>
          <img className="block" src={gallery2} alt="woman at desk" />
          <div className="caption">
            <p>
              Our tools will analyze your communication patterns and suggest new
              vocabulary words that correspond to your speaking and writing
              style. Then add these words to your vocabulary lists and get to
              work learning with games and quizzes.
            </p>
          </div>
        </div>

        <div className="program">
          <h2 className="captionHead">Build Your Lists</h2>
          <img className="block" src={gallery3} alt="woman at computer" />
          <div className="caption">
            <p>
              Build the right list for you. Create one list or several lists.
              Add words by reviewing words in the app. Or jump in and add the
              words from our pre-built list. You can analyze your writing to
              create a list unique to you.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="programs">
        <div className="program">
          <h2 className="captionHead">Games & Quizzes</h2>
          <img className="block" src={gallery4} alt="woman in office" />
          <div className="caption">
            <p>
              Play fun games and take challenging quizzes. This will help you
              learn and reinforce your lists into your everyday vocabulary. You
              can also set notifications for reminders to play games and take
              quizzes.
            </p>
          </div>
        </div>

        <div className="program">
          <h2 className="captionHead">Social Situations</h2>
          <img className="block" src={gallery5} alt="" />
          <div className="caption">
            <p>
              Imagine yourself in an important social or professional situation.
              What do you say? Word Situations help you look up words based on
              the situtation you are in, and quickly pull up an impressive word.
            </p>
          </div>
        </div>

        <div className="program">
          <h2 className="captionHead">Track Your Progress</h2>
          <img className="block" src={gallery6} alt="" />
          <div className="caption">
            <p>
              Once correctly identified 10 times, a word moves to your mastered
              list so you can monitor your progress. Then create new lists and
              add more words.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
