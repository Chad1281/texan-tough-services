import React from "react";
import TTSLogo from "./../../assets/images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

export default function Navigation() {
    return(
        <div id="navContainer">
            <a href="/home">
                <img src={ TTSLogo } alt="Logo with Minotaur (man with bull head and bull legs) holding labrys (double sided axe) next to printed words Texan Tough Services" />
            </a>            
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/construction">Home Construction</NavDropdown.Item>
                                <NavDropdown.Item href="/remodeling">Remodeling</NavDropdown.Item>
                                <NavDropdown.Item href="/barns">Barns</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/builds">Our Builds</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/contact">Contact Request</NavDropdown.Item>
                                <NavDropdown.Item href="/questionnaire">Project Questionnaire</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}