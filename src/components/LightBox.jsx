import React from 'react'
import './LightBox.css'

function LightBox(props) {
    if (props.openedPhoto.src == null) return null
    else return (
        <div className="LightBox slider" onClick={props.closePhoto}>
            <a className="close"></a>
            <img src={props.openedPhoto.src} alt=""/>
            <hr></hr>
            <p>{props.openedPhoto.comment}</p>
        </div>
    )
}

export default LightBox