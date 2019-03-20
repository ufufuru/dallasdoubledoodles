import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './InfoContainer.css'

function InfoContainer() {
    return (
        <div className="InfoContainer" id="info">
            <Container>
                <Row>
                    <Col sm="12" md="6" className="DDImg">
                        <img src="img/doubledoodle.jpg" alt="Double Doodle"/>
                    </Col>
                    <Col>
                        <div className="AboutUs">
                            <p>
                                What are double
                                doodles? They are cross between a labradoodle and golden-doodle. A labradoodle is a cross between a
                                poodle which can be standard or miniature. All of our doodles will be medium to large in size ranging
                                from 50-70 pounds. A golden-doodle is a cross between a poodle and golden retriever. Poodles remain the
                                second smartest dog in the purebred world along with being very loyal and protective, while Labrador
                                and Golden Retrievers remain the most popular pure bred dogs because of their intelligence, athleticism,
                                and being family friendly dogs. With double doodles, you get double the love and fun along with being
                                allergy friendly with low to non-shedding coats along with low to no odor or pet dander. They are also
                                gentle, easily trainable, smart, loyal and athletic making them the perfect family dog.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InfoContainer