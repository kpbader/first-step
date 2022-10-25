import './contact.css';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { BsEnvelope } from 'react-icons/bs';

function Contact() {
    return (
        <section id="contact-page">
            <div id="contact-container">
                <Fade top>
                    <div id="contact-header">
                        Contact Us
                    </div>
                </Fade>
                <Fade bottom>
                    <div id="contact-cards">
                        <Card>
                            <Card.Body>
                                <Card.Title>Aimee Klaus</Card.Title>
                                <Card.Text>
                                    +1 (773) 398-7881
                                </Card.Text>
                                <Card.Link href="mailto: Klausaimee31@gmail.com">
                                    <BsEnvelope />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Damion Smythia</Card.Title>
                                <Card.Text>
                                    +1 (213) 526-5675
                                </Card.Text>
                                <Card.Link href="mailto: Smythiadamion31@icloud.com">
                                    <BsEnvelope />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Joseph Munroe</Card.Title>
                                <Card.Text>
                                    +1 (239) 898-4248
                                </Card.Text>
                                <Card.Link href="mailto: jmunroe@steponedetox.com">
                                    <BsEnvelope />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Fade>
            </div>

        </section>
    )
};

export default Contact;