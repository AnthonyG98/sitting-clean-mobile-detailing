import React from "react"
import MobProps from "./mobprops"
function MobPrices(){
    return(
        <div className="pricing-container">
            <MobProps 
            head="Express Detail"
            listOne="FOAM WASH WITH SPOT FREE WATER"
            listTwo="WHEEL AND TIRE CLEANING"
            listThree="TIRE SHINE"
            listFour="INTERIOR WIPEDOWN AND VACUUM"
            listFive="ALL GLASS CLEANED INSIDE AND OUT"
            listSix="SPRAY SCENTS OF YOUR CHOICE (BLACK ICE OR CHERRY)"
            price="30"
            />
             <MobProps 
            head="Clay Wax Detail"
            listOne="FOAM WASH WITH SPOT FREE WATER"
            listTwo="CLAY BAR TREATMENT AND SPRAY WAX"
            listThree="WHEEL AND TIRE CLEANING"
            listFour="INTERIOR WIPEDOWN AND VACUUM"
            listFive="ALL GLASS CLEANED INSIDE AND OUT"
            listSix="SPRAY SCENTS OF YOUR CHOICE (BLACK ICE OR CHERRY)"
            price="65"
            />
             <MobProps 
            head="Full Interior Detail"
            listOne="FOAM WASH WITH SPOT FREE WATER"
            listTwo="WHEEL AND TIRE CLEANING"
            listThree="ALL LEATHER, VINYL, PLASTICS CLEANED AND PROTECTED"
            listFour="INTERIOR WIPEDOWN AND VACUUM"
            listFive="ALL CARPET AND SEATS SHAMPOOED AND EXTRACTED"
            listSix="ALL GLASS CLEANED INSIDE AND OUT"
            listSeven="SPRAY SCENTS OF YOUR CHOICE (BLACK ICE OR CHERRY)"
            price="80"
            />
        </div>
    )
}

export default MobPrices