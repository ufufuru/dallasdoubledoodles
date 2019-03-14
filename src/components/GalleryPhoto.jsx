import React from 'react'
import './GalleryPhoto.css'

function GalleryPhoto(props) {
    return (
        <div className="thumbnail">
            <img onClick={props.openPhoto.bind(props.photo, props.photo.src, props.photo.id, props.photo.comment)} src={props.photo.src} alt="Dog"/>
        </div>
    )
}

export default GalleryPhoto

