import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './PuppyBox.css'

function PuppyBox(props) {
    if (props.openedPuppy.name == null) return null
    else return (
        <div className="PuppyBox slider" onClick={props.closePuppy}>
            <a className="closePuppy"></a>
            <Container className="PuppyInfo">
                <Row>
                    <Col xs="12" className="PuppyImage">
                        <img src={props.openedPuppy.image} alt=""/>
                    </Col>
                    <Col xs="12">
                        <h1>{props.openedPuppy.name}</h1>
                        <p>{props.openedPuppy.info}</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default PuppyBox