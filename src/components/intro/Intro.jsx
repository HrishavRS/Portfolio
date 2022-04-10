import "./intro.scss";
import { init } from "ityped";
import { useRef, useEffect } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 25,
      backDelay: 2000,
      strings: ["Python", "HTML/CSS", "React.js", "C / C++"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/author.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bienvenue!</h2>
          <h1>I am Hrishav Raghu Shrestha</h1>
          <h3>
            Skills <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
