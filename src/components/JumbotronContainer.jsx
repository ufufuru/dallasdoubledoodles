import React from 'react'
import { Jumbotron, Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import './JumbotronContainer.css'

function JumbotronContainer() {
    return (
        <div className="JumboNav">
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink href="#info">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#doodles">Our Doodles</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#philosophy">Our Philosophy</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#service">Service Information</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#application">Application</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Jumbotron>
                <div className="JumboText">
                    <h1>Dallas <span className="Orange">Double</span> Doodles</h1>
                    <p>Responsible Breeders in Northeast Dallas</p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default JumbotronContainer