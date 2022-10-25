import './mission.css';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { FaClinicMedical, FaPeopleCarry, FaUsers, FaHandsHelping } from 'react-icons/fa';

function Mission() {
    return (
        <section id="mission-page">
            <Fade top>
                <div id="mission-heading">
                    <header>Our Mission</header>
                    <p>Providing better resources to help you move forward. Rebuild, repair, and progress for whatever comes next.</p>
                </div>
            </Fade>
            <Fade bottom>
                <div id="mission-cards">
                    <Card>
                        <FaClinicMedical className="service-icon" />
                        <Card.Body>
                            <Card.Text>
                                Rehabilitate those with the desire to better themselves and their lives
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <FaPeopleCarry className="service-icon" />
                        <Card.Body>
                            <Card.Text>
                                Reintroduce formerly incarcerated individuals back into the community
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FaHandsHelping className="service-icon" />
                        <Card.Body>
                            <Card.Text>
                                Supporting veterans adjusting to civilian life
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FaUsers className="service-icon" />
                        <Card.Body>
                            <Card.Text>
                                Helping vulnerable groups rebuild (Homeless, domestic abuse victims, and others in need)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Fade>
        </section>
    )
};

export default Mission;