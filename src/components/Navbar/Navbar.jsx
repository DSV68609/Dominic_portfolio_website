import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import home from '../../assets/navbar_links/home.png';
import about from '../../assets/navbar_links/about.png';
import technologies from '../../assets/navbar_links/technologies.png';
import projects from '../../assets/navbar_links/projects.png';
import contacts from '../../assets/navbar_links/contacts.png';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <h1 className="nav_text">Portfolio</h1>
            </div>
            <ul className="app__navbar-links">
                <div className="wrapper">
                    <div className="button" href="#Header">
                        <div className="icon"><img src={home} href="#Header"/></div>
                        <span>Home</span>
                    </div>
                    <div className="button" href="#Header">
                        <div className="icon"><img src={about} alt="#about"/></div>
                        <span>About</span>
                    </div>
                    <div className="button" href="#Technologies">
                        <div className="icons"><img src={technologies} alt="#technologies"/></div>
                        <span>Techology</span>
                    </div>
                    <div className="button" href="#Projects">
                        <div className="icons"><img src={projects} alt="#projects"/></div>
                        <span>Projects</span>
                    </div>
                    <div className="button" href="#Contacts">
                        <div className="icons"><img src={contacts} alt="contacts"/></div>
                        <span>Contact</span>
                    </div>
                </div>
            </ul>
            <div className="navbar_button">
                <button type="button">Let's Talk</button>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Technologies</a></li>
                            <li><a href="#awards" onClick={() => setToggleMenu(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacts</a></li>
                        </ul>
                    </div>
                 )}
            </div>
        </nav>
    )
}

export default Navbar;