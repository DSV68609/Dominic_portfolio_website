import React from 'react';
import './Header.css';
import { Typewriter } from "react-simple-typewriter";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import { BgAnimation, Carousel } from '../../containers';


const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Hi! I'am Dom. A self taught,
          <h1 className="header_orange">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Web Developer.', 'React Developer.', 'Django Developer.']}
            />
          </h1>
        </h1>
        <Carousel/>
        <div className="header-content__input">
          <button type="button">Hire Me!</button>
        </div>
        <div className="icon_link">
          <a><img src={gmail} alt="gmail"/></a>
          <a><img src={github} alt="github"/></a>
          <a><img src={facebook} alt="facebook"/></a>
          <a><img src={instagram} alt="instagram"/></a>
          <a><img src={twitter} alt="twitter"/></a>
        </div>
        <p>Click icons to show my accounts!</p>
      </div>
      <BgAnimation/>
    </div>
  )
}

export default Header;