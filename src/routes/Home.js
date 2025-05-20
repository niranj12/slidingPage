import react, { Component, useEffect } from "react";
import Hero from "../compoenents/Hero";
import Particle from "../compoenents/Particles";
import MyComponent from "react-full-page-scroller";
import gal from "../assests/on.jpg";

import Scrollspy from "react-scrollspy-navigation";

import Fullpage1 from "../compoenents/Fullpage1";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero1 from "../compoenents/Hero1";

import { motion } from "framer-motion";
import Hero3 from "../compoenents/Hero3";
import Herodom from "../compoenents/Herodom";
import Navbar from "../compoenents/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

export default class Home extends Component {
  render() {
    return (
      <div className="w-screen">
        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
        >
          <MouseParallaxChild>
            <Particle />
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <Navbar />

        <div className=" snap-mandatory  snap-y  w-full ">
          <section id="section1  ">
            <Herodom
              title="Research + Process + Experience"
              img={gal}
              subtitle="We ensure businesses reach their full potential by building solutions around their<br/> business problems using data and intuitive design."
              btn="VIEW OUR SOLUTIONS"
            />
          </section>
          <section id="section2 ">
            <Herodom
              title="Ideas + Passion + Innovation"
              img={gal}
              subtitle="We ensure businesses <br/> reach their full potential by building solutions around their <br/>business problems using data and intuitive design."
              btn="VIEW OUR SOLUTIONS"
            />
          </section>
          <section id="section3">
            <Herodom
              title="Ideas + Passion + Innovation"
              img={gal}
              subtitle="We ensure businesses <br/> reach their full potential by building solutions <br/>around their <br/>business problems using data and intuitive design."
              btn="VIEW OUR SOLUTIONS"
            />
          </section>
        </div>
      </div>
    );
  }
}
