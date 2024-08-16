import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
        <h2>About Me</h2>
        <p>Yes this is me and i am a certified software developer </p>
        <img src={image} alt="I made this" />
  </div>;
}

export default About;
