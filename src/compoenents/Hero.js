import { react } from "react";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import "./Hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { motion, useAnimation } from "framer-motion";

import Particle from "./Particles";
const Hero = () => {
  return (
    <>
      <div>
        <Navbar />
        <div
          className="width-100%  z-2
           overflow-hidden
           object-cover
      "
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto"
            }}
            globalFactorX={0.2}
            globalFactorY={0.2}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.25}
              factorY={0.25}
            ></MouseParallaxChild>
            <MouseParallaxChild factorX={0.25} factorY={0.25}>
              <div className="height-30 width-30">
                <Particle />
              </div>
              <motion.img
                className="z-3"
                //animate={imgAnimation}
                // transition={{
                //   type: "spring",
                //   stiffness: 30
                // }}
                //onMouseMove={(e) => handleMouseMove(e)}
                src={gal}
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: -100, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className=" absolute w-full top-[440px] h-60  flex justify-center  
          "
        >
          <div className=" w-[1000px] text-left absolute">
            <h1 className=" text-6xl text-white font-extrabold">
              {" "}
              Art + Design + Technology
            </h1>
            <h4 className="text-[18px] text-white mt-3">
              We blend your stories with future tech, to create engaging and
              immersive
              <br /> experiences.
            </h4>
            <div className="main-con">
              <motion.button
                className=" fill text-white z-3
             
          "
                whileHover={{
                  backgroundColor: "#FFFFFF"
                }}
                // initial={{ x: 200, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ delay: 1.6, type: "spring", stiffness: 30 }}
              >
                VIEW OUR SERVICES
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
