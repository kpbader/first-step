import "./home.css";
import splashVid from "../../assets/images/splash-video.mp4";
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { BsHouseFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaTshirt } from "react-icons/fa";
import BottomContact from "../Bottom-Contact/bottom-contact";
import { Link } from 'react-router-dom';

function Home() {

    return (
        <section id="home-page">
            <div id="home-splash">
                <video autoPlay muted loop >
                    <source src={splashVid} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <Fade>
                    <h2>Housing and employment assistance to create stability</h2>
                </Fade>
            </div>
            <div id="services-we-provide">
                <Fade top>
                    <div id="services-header">
                        <h3>Services We Provide</h3>
                    </div>
                </Fade>
                <Fade bottom>
                    <div id="service-cards">
                        <Card>
                            <BsHouseFill className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Transportation, food, transitional housing
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaHandHoldingUsd className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Job Placement
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaTshirt className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Clothing, medical, and EBT/GR assistance
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <button id="learn-more-btn">
                        <Link to="/what-we-do">Learn More</Link>
                    </button>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Home;