import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Competitive Programmer.",
      "Full Stack Developer.",
      "UI Designer.",
      "Machine Learning Engineer.",
      "Writer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Komal !</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Possessing a versatile skillset, I bring a blend of technical prowess
          and creative insight. Driven by a passion for innovation and
          problem-solving, I am eager to contribute fresh perspectives and
          dynamic solutions to any project. Ready to grow and make an impact, I
          thrive on turning challenges into opportunities.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
