import './nav.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function Navbar() {
    return (
        <section id="nav-bar">
            <div id="nav-logo">
                <p>First Step logo here</p>
            </div>
            <Nav >
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/" className="nav-tab">Home</Link>
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