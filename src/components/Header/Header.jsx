import React, {useState} from 'react';
import './Header.css';
import { Typewriter } from "react-simple-typewriter";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import { BgAnimation, Carousel } from '../../containers';


const Header = () => {
  const [isFb, setIsFb ] = useState(false);
  const [isHub, setIsHub ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGram, setIsGram ] = useState(false);
  const [isTweet, setIsTweet ] = useState(false);
  const [isContact, setIsContact ] = useState(false);

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
          <button onClick={() => setIsContact(!isContact)} type="button">Contact and Hire Me!</button>
          {isContact &&
            <div className="contact_icon">
              <p>Call Me: 09915708880</p>
            </div>
          }
        </div>
        <div className="icon_link">
          <div>
            <a><img src={gmail} onClick={() => setIsOpen(!isOpen)} alt="gmail"/> </a>
            {isOpen && 
            <div className="gmail_icon">
              <p>dominicvillanueva07@gmail.com</p>
            </div>
            }
          </div>
          <div>
            <a><img src={github} onClick={() => setIsHub(!isHub)} alt="github"/></a>
            {isHub &&
              <div className="github_icon">
                  <p>DSV68609</p>
              </div>
            }
          </div>
          <div>
            <a><img src={facebook} onClick={() => setIsFb(!isFb)} alt="facebook"/></a>
            {isFb && 
              <div className="fb_icon">
                <p>Dominic Soriano Villanueva</p>
              </div>
            }
          </div>
          <div>
            <a><img src={instagram} onClick={() => setIsGram(!isGram)} alt="instagram"/></a>
            {isGram && 
              <div className="insta_icon">
                <p>@Boniknoks</p>
              </div>
            }
          </div>
          <div>
            <a><img src={twitter} onClick={() => setIsTweet(!isTweet)} alt="twitter"/></a>
            {isTweet && 
              <div className="tweet_icon">
                <p>@DominicEinstein</p>
              </div>
            }
          </div>
        </div>
        <p>Click icons to show my accounts!</p>
      </div>
      <BgAnimation/>
    </div>
  )
}

export default Header;