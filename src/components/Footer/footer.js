import './footer.css';
import footerLogo from '../../assets/images/first-step-logo_v5.png';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import { useEffect } from 'react';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="footer">
            <div id="footer-logo">
                <img src={footerLogo} alt="logo" />
            </div>
            
                <Nav id="footer-nav">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/" className="footer-nav-tab" onClick={scrollToTop}>Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/what-we-do" className="footer-nav-tab" onClick={scrollToTop}>What We Do</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/our-mission" className="footer-nav-tab" onClick={scrollToTop}>Our Mission</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about" className="footer-nav-tab" onClick={scrollToTop}>About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact" className="footer-nav-tab" >Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            
        </section>
    )
};

export default Footer;