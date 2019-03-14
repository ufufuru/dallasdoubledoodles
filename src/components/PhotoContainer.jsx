import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import { Container, Row, Col } from 'reactstrap'
import './PhotoContainer.css'

function PhotoContainer(props) {
    const dogPhotos = props.photos.map(photo => <GalleryPhoto key={photo.id} photo={photo} openPhoto={props.openPhoto} closePhoto={props.closePhoto}/>)

    return (
        <div className="PhotoContainer">
            <Container>
                {dogPhotos}
            </Container>
        </div>
    )
}

export default PhotoContainer