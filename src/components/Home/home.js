import "./home.css";
import splashVid from "../../assets/images/splash-video.mp4";
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { BsHouseFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaTshirt } from "react-icons/fa";
import { useState, useRef } from 'react';

function Home() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

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
                <div id="services-header">
                    <Fade top>
                        <h3>Services We Provide</h3>
                    </Fade>
                </div>
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
                </Fade>
            </div>
            <div id="bottom-contact">
                <Fade left>
                    <form id="contact-form">
                        <p id="hp-contact-form-header">Reach Out</p>
                        <div id="form-slot-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={name} name="name"/>
                        </div>
                        <div id="form-slot-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" defaultValue={email} name="email" />
                        </div>
                        <div id="form-slot-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" defaultValue={message} rows="10" cols="45" />
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </Fade>
                <Fade right>
                    <div id="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.6489427455967!2d-118.3262758!3d34.10413270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3ed11d5b7b%3A0x99f46e99e3954ee9!2s1800%20Vine%20St%20%23210%2C%20Los%20Angeles%2C%20CA%2090028!5e0!3m2!1sen!2sus!4v1666736738203!5m2!1sen!2sus" title="map" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Home;