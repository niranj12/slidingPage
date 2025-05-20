import { react } from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import "./Hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { Component } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import Particle from "./Particles";
const Herodom = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.5
        }
      });
    }
    if (!inView) {
      animation.start({
        y: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        className="
           bg-black
           h-screen
           border-3 border-white
           overflow-hidden
           
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
            <div className="height-30 width-30">{/* <Particle /> */}</div>
            <motion.img
              className="z-3"
              //animate={imgAnimation}
              // transition={{
              //   type: "spring",
              //   stiffness: 30
              // }}
              //onMouseMove={(e) => handleMouseMove(e)}
              src={props.img}
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>

      <motion.div
        // initial={{ x: 0, y: 0, opacity: 0 }}
        // animate={{ x: 0, y: -100, opacity: 1 }}

        // transition={{ delay: 0.8, type: "spring" }}
        animate={animation}
        className=" z-70  w-full h-60  mt-[-400px] flex justify-center  items-center align-middle 
          "
      >
        <div className=" w-[1000px] text-left  z-40">
          <h1 className=" text-6xl text-white font-extrabold">{props.title}</h1>
          <h4 className="text-[18px] text-white mt-3">
            {}
            <p dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
            {/* We blend your stories with future tech, to create engaging and
              immersive
              <br /> experiences. */}
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
              {props.btn}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Herodom;
