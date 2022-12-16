import './nav.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import FSlogo from '../../assets/images/first-step-logo_v5.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Navbar() {

    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <section id="nav-bar">
            <img src={FSlogo} alt="first step logo" />
            <Nav id="top-nav">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/first-step" className="nav-tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/what-we-do" className="nav-tab">What We Do</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/our-mission" className="nav-tab">Our Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="nav-tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="nav-tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton/>
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">
                            <Link to="/first-step" className="header-nav-tab">Home</Link>
                            <Link to="/what-we-do" className="header-nav-tab">What We Do</Link>
                            <Link to="/our-mission" className="header-nav-tab">Our Mission</Link>
                            <Link to="/about" className="header-nav-tab">About Us</Link>
                            <Link to="/contact" className="header-nav-tab">Contact</Link>
                        </ul>
                    </section>
                </Offcanvas.Body>
            </Offcanvas >

        </section>
    )
}

export default Navbar;