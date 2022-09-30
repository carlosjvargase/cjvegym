import React from 'react';
import Header from '../header/Header';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import {motion} from "framer-motion";
import NumberCounter from "number-counter";

const transition = {type: 'spring', duration : 3};
const mobile = window.innerWidth<=768 ? true: false;
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="blur blurH"></div>
        <div className="leftH">
            <Header/>
            {/*The best ad */}
            <div className="theBestAd">
              <motion.div
              initial={{left: mobile? "150px": '238px'}} 
              whileInView={{left:'8px'}}
              transition={{...transition, type: 'tween'}}
              ></motion.div>
              <span>The Best Fitness Club in the town </span>
            </div>
            {/*Hero Heading */}
            <div className="heroText">
                <div>
                  <span className="stroke-text">Shape </span>
                  <span>Your</span>
                </div>
                <div>
                  <span>Ideal body </span>
                </div>
                <div>
                  <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            {/*Figures*/}
            <div className="figures">
              <div>
                <span><NumberCounter end={185} start={100} delay='4' preFix='+'/></span>
                <span>Expert Coachs</span>
              </div>
              <div>
                <span><NumberCounter end={1400} start={1000} delay='4' preFix='+'/></span>
                <span>Members Joined</span>
              </div>
              <div>
                <span><NumberCounter end={65} start={30} delay='4' preFix='+'/></span>
                <span>Fitness Programs</span>
              </div>
            </div>
            {/*Hero Buttons*/}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>
            </div>
            {/*Hero Information*/}
        <div className="rightH">
          <button className="btn ">Join Now</button>
          <motion.div
           initial={{right:'-1rem'}}
           whileInView={{right:'4rem'}}
           transition={transition}
           className="heartRate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
            {/*Hero Images*/}
          <img src={hero_image} alt="" className="heroImage" />
          <motion.img
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className="heroImageBack" />
          {/*Calories*/}
          <motion.div 
          initial={{right:'37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}
          className="calories">
            <img src={calories} alt=""/>
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
          </motion.div>
        </div>

    </div>
  );
};

export default Hero;