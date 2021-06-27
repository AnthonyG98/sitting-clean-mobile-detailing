import React from "react"
import carLogo from "../images/sitting-clean-mobile-detaling-logo.png"
import { Link } from "react-scroll";

function Nav() {
    return(
        <div className="home-container">
                <div className="home-logo-container">
                    <img src={carLogo} className="logo" alt="sitting clean mobile detailing logo"/>
                    <div className="title-container">
                        <h1 className="title-head">Sitting Clean</h1>
                        <h1 className="title-head-two">Mobile Detailing</h1>
                    </div>
                </div>
                <div className="links-container">
                    <Link to="home" 
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                    className="link">Home</Link>
                    <Link to="offers" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link">Offers</Link>
                    <Link to="gallery" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link">Gallery</Link>
                    <Link to="about" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link">About Us</Link>
                    <Link to="contact-scroll" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="link" id="contact">Contact</Link>
                </div>
        </div>
    )
}

export default Nav