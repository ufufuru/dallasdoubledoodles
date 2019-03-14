import React from 'react'
import './FooterContainer.css'
import { Container } from 'reactstrap'

function FooterContainer() {
    return (
        <div>
            <Container fluid className="FooterContainer">
                <p>Copyright 2019 dallasdoubledoodles.com. All rights reserved. | Created by <a href="https://github.com/ufufuru">Alex</a></p>
            </Container>
        </div>
    )
}

export default FooterContainer