import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJava, SiPython } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/komal-jagdish-nichat-905a9422a/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="#">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="#">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaJava />
          </span>
          <span className="bannerIcon">
            <SiPython />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
