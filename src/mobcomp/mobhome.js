import React from "react"
import homeParallax from "../images/sitting-clean-mobile-detaling-happy-customer-one.png.jpg"

function MobHome(){
    return(
        <div className="mh-container">
            <div className="mh-img-container">
                <div className="mh-overlay"></div>
                <img className="mh-img" src={homeParallax} alt="sitting clean mobile detailing - happy customer" />
                <div className="mh-text-container">
                    <h1 className="mh-head">PROUDLY SERVING LA COUNTY!</h1>
                    <h1 className="mh-head">Open Friday - Monday</h1>
                    <button className="mh-button">Call us today!</button>
                </div>
            </div>
        </div>
    )
}

export default MobHome