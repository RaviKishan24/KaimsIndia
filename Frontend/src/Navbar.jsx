import React, { useState } from 'react';
import "./Navbar.css";
import logo from "./assets/logo.png";
import fbicon from "./assets/fb.png";
import instaicon from "./assets/insta.png";
import xicon from './assets/x.png'
import humburgericon from "./assets/hum.png";
import crossicon from "./assets/crossicon.png";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
           
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="logo" className='logo' />
                </div>

                {/* Hamburger for mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <img src={humburgericon} alt="menu" />
                </div>

                {/* Desktop Links */}
                <div className='mid-section'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/services'}>Service</Link>
                    <Link to={'/portfolio'}>Portfolio</Link>
                    <Link to={'/blog'}>Blog</Link>
                    <Link to={'/contact-us'}>Contact Us</Link>
                </div>

                {/* Social Icons */}
                <div className='side-icon'>
                    <img src={instaicon} alt="Instagram" />
                    <img src={fbicon} alt="Facebook" />
                       <img src={xicon} alt="x-twiter" />
                </div>

                {/* Mobile Slide-in Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={toggleMenu}>
                        <img src={crossicon} alt="Close menu" />
                    </div>
                    <Link to={'/home'} onClick={toggleMenu}>Home</Link>
                    <Link to={'/about'} onClick={toggleMenu}>About</Link>
                    <Link to={'/contact'} onClick={toggleMenu}>Contact</Link>
                    <Link to={'/services'} onClick={toggleMenu}>Service</Link>
                    <Link to={'/portfolio'} onClick={toggleMenu}>Portfolio</Link>
                    <Link to={'/blog'} onClick={toggleMenu}>Blog</Link>
                    <Link to={'/contact-us'} onClick={toggleMenu}>Contact Us</Link>
                </div>
            </nav>
             <h1 className='header-text'>
                🚀 Grow Your Business Online with KAIMS India – Get a Free Digital Marketing Audit Today!
            </h1>
        </div>
    );
}

export default Navbar;