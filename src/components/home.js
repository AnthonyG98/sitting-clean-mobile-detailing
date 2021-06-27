import React from "react"
import homeParallax from "../images/sitting-clean-mobile-detaling-happy-customer-one(crop).png.jpg"

function Home(){
    return(
        <div className="parallax-container" id="home">
            <div className="parallax-img-container">
                <div className="overlay"></div>
                <img className="parallax-img" src={homeParallax} alt="sitting clean mobile detailing - happy customer" />
                <div className="parallax-text-container">
                    <h1 className="parallax-text">PROUDLY SERVING THE LOS ANGELES COUNTY!</h1>
                    <h1 className="parallax-text">Open Friday - Monday</h1>
                    <a href="tel:5623318879" className="contact-button">Call us today.</a>
                </div>
            </div>
        </div>
    )
}

export default Home