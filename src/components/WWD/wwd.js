import './wwd.css';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { BsHouseFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaTshirt } from "react-icons/fa";
import BottomContact from '../Bottom-Contact/bottom-contact';

function WWD() {

    return (
        <section id="wwd-page">
            <div id="wwd">
            <Fade top>
                <div id="wwd-heading">
                    What We Do
                </div>
            </Fade>
            <Fade bottom>
                <div id="wwd-cards">
                    <Card>
                        <FaHandHoldingUsd className="service-icon" />
                        <Card.Body>
                            <Card.Title>Employment Assistance</Card.Title>
                            <Card.Text>
                                Explore opportunities to work for major corporations, such as Amazon, Tesla, Nordstrom, and other felon-friendly companies and small businesses
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <BsHouseFill className="service-icon" />
                        <Card.Body>
                            <Card.Title>Better Transitional Housing Options</Card.Title>
                            <Card.Text>
                                Providing housing, food, transportation, and other necessities while you make your life transition.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FaTshirt className="service-icon" />
                        <Card.Body>
                            <Card.Title>Other Services</Card.Title>
                            <Card.Text>
                                Clothing, medical coverage, and EBT/GR assistance
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default WWD;