import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Acheivements</h2>
        </div>
        <div className="mt-14 w-60% h-[700px] border-l-[6px] border-l-black border-opacity-30 flex justify-center items-center flex-col gap-10">
          <ResumeCard
            title="Competetive Programming Platform"
            subTitle="2🌟 on Codechef and Leetcode Rating: 1516"
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Winner of Geek Venture Hunt 2.0"
            subTitle="Organized by GFG RCOEM "
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Speaker at CIIIT Startup Progressia"
            subTitle="My first public talk on Introduction to Machine Learning and Future of AI. "
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
