import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "A work on KU forum for my 3rd year 1st semester project work",
      img: "https://i.ytimg.com/vi/lxy83UDMMTA/maxresdefault.jpg",
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "A semester Project on Covid Update App for android",
      img: "https://healthcare-in-europe.com/media/story_section_text/18526/image-01-shutterstock-1681327690-pst-vector_hires.jpg",
    },
    {
      id: 3,
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "A work on KU forum for my 3rd year 1st semester project work",
      img: "https://i.ytimg.com/vi/lxy83UDMMTA/maxresdefault.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <div
        className="slider"
        style={{ transform: `transformX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
