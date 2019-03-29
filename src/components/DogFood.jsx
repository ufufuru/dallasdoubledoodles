import React from 'react'
import './DogFood.css'

function DogFood(props) {
    if (props.foodOpened == false ) return null
    else return (
        <div className="LightBox slider" onClick={props.closeFood}>
            <a className="close"></a>
            <img src="img/dogfood.jpg" alt=""/>
        </div>
    )
}

export default DogFood