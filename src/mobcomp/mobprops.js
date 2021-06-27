import React from "react"

function MobProps(props) {
    return(
        <div className="mob-pack-one">
            <h1 className="pack-head">{props.head}</h1>
                <li className="pack-list">{props.listOne}</li>
                <li className="pack-list">{props.listTwo}</li>
                <li className="pack-list">{props.listThree}</li>
                <li className="pack-list">{props.listFour}</li>
                <li className="pack-list">{props.listFive}</li>
                <li className="pack-list">{props.listSix}</li>
                <li className="pack-list">{props.listSeven}</li>
                <h1 className="pack-price">$ {props.price} +</h1>
                <button className="select">Select package</button>
        </div>
    )
}

export default MobProps