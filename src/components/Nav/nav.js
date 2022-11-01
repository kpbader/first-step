import './nav.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import FSlogo from '../../assets/images/first-step-logo_v5.png';


function Navbar() {
    return (
        <section id="nav-bar">
                <div id="nav-logo">
                    <img src={FSlogo} alt="first step logo" />
                </div>
                <Nav id="top-nav">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/first-step/" className="nav-tab">Home</Link>
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
        </section>
    )
}

export default Navbar;