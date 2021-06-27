import React from "react"
import carLogo from "../images/sitting-clean-mobile-detaling-logo.png"


function MobNav() {
    return(
        <div className="mobnav-container">
            <div className="mv-logo-container">
                <img className="mv-logo"src={carLogo} alt="sitting clean mobile detailing logo" />
                <div className="mv-head-container">
                    <h1 className="mv-head">Sitting Clean</h1>
                    <h1 className="mv-head-two">Mobile Detailing</h1>
                </div>
            </div>
            <div className="mv-link-container">
                <div className="bars-container">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}

export default MobNav