import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <h1 className="nav_text">Portfolio</h1>
            </div>
            <ul className="app__navbar-links">
                <li className="nav_text"><a href="#home">Home</a></li>
                <li className="nav_text"><a href="#about">About</a></li>
                <li className="nav_text"><a href="#menu">Technologies</a></li>
                <li className="nav_text"><a href="#awards">Projects</a></li>
                <li className="nav_text"><a href="#contact">Contacts</a></li>
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