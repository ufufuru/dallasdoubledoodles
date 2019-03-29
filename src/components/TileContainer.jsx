import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './TileContainer.css'

function TileContainer(props) {
    
    return (
        <div id="service">
            <Container fluid>
                <Row className="TileContainer">
                    <Col xs="6" md="6" lg="3" className={(props.openedTile === "money") ? "Tile Green NoBorder" : "Tile Green"} onClick={props.openTile.bind(this, "money")}>
                        <div>
                            <img src="img/money.png" alt="Money"/>
                            <h3>Pricing</h3>
                        </div>                    
                    </Col>
                    <Col xs="6" md="6" lg="3" className={(props.openedTile === "medicine") ? "Tile Blue NoBorder" : "Tile Blue"} onClick={props.openTile.bind(this, "medicine")}>
                        <div>
                            <img src="img/medicine.png" alt="Money"/>
                            <h3>Vet Care & Vaccination</h3>
                        </div>                    
                    </Col>
                    <Col xs="6" md="6" lg="3" className={(props.openedTile === "food") ? "Tile Orangee NoBorder" : "Tile Orangee"} onClick={props.openTile.bind(this, "food")}>
                        <div>
                            <img src="img/pet-food.png" alt="Money"/>
                            <h3>Nutrition</h3>
                        </div>                    
                    </Col>
                    <Col xs="6" md="6" lg="3" className={(props.openedTile === "training") ? "Tile Purple NoBorder" : "Tile Purple"} onClick={props.openTile.bind(this, "training")}>
                        <div>
                            <img src="img/dog-training.png" alt="Money"/>
                            <h3>Training</h3>
                        </div>                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TileContainer