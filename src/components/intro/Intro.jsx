// import { init } from "ityped";
// import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     //This all ityped that doesn't working here
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/bb.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Burhanuddin Marcha</h1>
          <h3>
            Frontend <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
