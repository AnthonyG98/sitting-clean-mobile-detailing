import React from "react"
import option from "./contact"

function PriceProps(props) {
    var priceHead = document.querySelector(".pack-head");
    var button = document.querySelectorAll(".select");

    for (var i = 0 ; i < button.length; i++) {
        button[i].addEventListener('click' , function(){
            priceHead.innerHTML = option.value;
        }) ; 
     }
    return(
        <div className="pack-one">
            <h1 className="pack-head">{props.head}</h1>
                <li className="pack-list">{props.listOne}</li>
                <li className="pack-list">{props.listTwo}</li>
                <li className="pack-list">{props.listThree}</li>
                <li className="pack-list">{props.listFour}</li>
                <li className="pack-list">{props.listFive}</li>
                <li className="pack-list">{props.listSix}</li>
                <li className="pack-list">{props.listSeven}</li>
        </div>
    )
}

export default PriceProps