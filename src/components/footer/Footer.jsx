import React from 'react';
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='footerC'>
        <hr />
        <div className="footer">
            <div className="socialLinks">
 
                <img src={github} alt=""/>


                <img src={instagram} alt="" />


                <img src={linkedin} alt="" />

                </div>
                <div className="logoF">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blurF1"></div>
            <div className="blur blurF2"></div>
    </div>
  );
};

export default Footer;