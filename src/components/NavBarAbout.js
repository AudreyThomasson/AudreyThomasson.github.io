// This NavBar is for the About page
import { React, useState } from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';


export const NavBarAbout = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Container className="justify-content-center">
                <Row className="justify-content-center">
                    <Navbar className="nav-container" expand="sm"  fixed="top" expanded={expanded}>
                        <Navbar.Brand className="Kelson-ExtraBold my-name" href="/"><strong>AUDREY THOMASSON</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mainNavBurger" onClick={() => setExpanded(expanded ? false : "expanded")} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <HashLink className="nav-words" onClick={() => setExpanded(false)} to="/#work">WORK</HashLink>
                                <span className='d-none d-sm-block'>/</span>
                                <HashLink className="nav-words" onClick={() => setExpanded(false)} to='#about'>ABOUT</HashLink>
                                <span className='d-none d-sm-block'>/</span>
                                <HashLink className="nav-words" onClick={() => setExpanded(false)} to="#connect">CONNECT</HashLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </>
    )
};