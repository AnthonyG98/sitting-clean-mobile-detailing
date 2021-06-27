import React, {useState} from "react"
import bubble from "../images/bubble.png"
import { SliderData } from "./sliderdata.js"


const Gallery = ( { slides } ) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }
    console.log(current)
    if(!Array.isArray(slides) || slides <= 0) {
        return null
    }
    return(
        <div className="gallery-container" id="gallery">
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
                    <a href="tel:5623318879"  className="contact">
                        Call us today!
                    </a>
                    <p>or</p>
                    <button className="message">Send us a message</button>
                </div>
            </div>
            <div className="gal-img-container">
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={slide.image} alt="happy customer" />)}
                        </div>
                    )
                })}
                <div className="dots-container">
                    <div className="arrow-overlay"></div>
                    <i class="fas fa-chevron-left" onClick={prevSlide}></i>
                    <i class="fas fa-chevron-right" onClick={nextSlide}></i>
                </div>
            </div>
        </div>
    )
}

export default Gallery


