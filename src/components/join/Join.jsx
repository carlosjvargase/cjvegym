import React, { useRef } from 'react';
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_vuysf1s','template_2stffkk', form.current, 'vfQb1k6GQAep6JVBW')
        .then((result)=> {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (
    <div className="join" id="joinUs">
        <div className="leftJ">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span >LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="rightJ">

        <form ref={form} action="" className="emailC" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter your Email adress' />
            <button className='btn btnJ'>Join Now</button>
        </form>
        </div>
    </div>
  );
};

export default Join;