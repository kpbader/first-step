import './mission.css';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { FaClinicMedical, FaPeopleCarry, FaUsers, FaHandsHelping } from 'react-icons/fa';
import BottomContact from '../Bottom-Contact/bottom-contact';

function Mission() {

    return (
        <section id="mission-page">
            <div id="mission">
            <Fade top>
                <div id="mission-heading">
                    <header>Our Mission</header>
                    <p>To provide quality transitional housing and treatment for those seeking recovery that creates long-lasting, positive change in your life and the world around you.</p>
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
            </div>
            <BottomContact />
        </section>
    )
};

export default Mission;