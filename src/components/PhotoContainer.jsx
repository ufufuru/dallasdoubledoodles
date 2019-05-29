import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import { Container } from 'reactstrap'
import './PhotoContainer.css'

function PhotoContainer(props) {
    const dogPhotos = props.photos.map(photo => <GalleryPhoto key={photo.id} photo={photo} openPhoto={props.openPhoto} closePhoto={props.closePhoto}/>)

    return (
        <div className="PhotoContainer">
            <Container>
                {dogPhotos}
            </Container>
            <h4 className="PuppiesAnnouncement">Anabelle and Tucker are the proud parents of three boys and three girls that were born April 8,  2019! The puppies will be ready to go to their furever homes starting the week of June 10th 2019. Puppies had first check up at one week of age by our veterinarian and were dewormed at that time as well. They are all healthy. They will have second check up and first set of vaccines at 8 weeks of age.</h4>
            <h5 className="PuppiesAnnouncement"> Check out the photos above!</h5>
        </div>
    )
}

export default PhotoContainer