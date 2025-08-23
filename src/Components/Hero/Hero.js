import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Words to Impress</h1>
        <p>The Smart App to help you Build Your Word Prowess</p>
        <a
          className="learnmorebtn"
          href="https://play.google.com/store/apps/details?id=com.RN_WordsToImpress"
        >
          Android
        </a>
        <a className="learnmorebtn" href="https://www.apple.com/app-store/">
          Apple
        </a>
      </div>
    </div>
  );
}
