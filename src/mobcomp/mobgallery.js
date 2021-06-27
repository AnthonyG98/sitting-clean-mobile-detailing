import React from "react"
import bubble from "../images/bubble.png"
import galleryOne from "../images/sitting-clean-mobile-detaling-happy-customer-two.jpg"
function Gallery(){
    return(
        <div className="mob-gallery-container">
            <div className="slogan-container">
                <div className="bubbles-container">
                  <img id="bubble-one" src={bubble} alt="bubble"/>  
                  <img id="bubble-two" src={bubble} alt="bubble"/> 
                  <img id="bubble-three" src={bubble} alt="bubble"/> 
                  <img id="bubble-four" src={bubble} alt="bubble"/> 
                  <img id="bubble-five" src={bubble} alt="bubble"/> 
                </div>
                <h1>DON'T SLEEP, HAVE YOUR CAR <h1 className="sitting-clean">SITTING CLEAN!</h1></h1>
                <div className="gal-button-container">
                    <button className="contact">
                        Call us today!
                    </button>
                    <p>or</p>
                    <button className="message">Send us a message</button>
                </div>
            </div>
            <div className="gal-img-container">
                <img className="gall-img" src={galleryOne} alt="sitting clean mobile detailing - satisfied customer" />
                <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery


