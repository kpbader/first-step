import './about.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';


function About() {

    return (
        <section id="about-page">
            <div id="about">
                <Fade bottom>
                    <div id="about-text">
                        <div id="about-header">
                            About Us
                        </div>
                        <div id="about-p">
                            <p>Come enjoy comfortable living and support at any of our locations across California and now expanding as far as North Carolina. Men, women, the homeless, domestic violence victims, and anyone else 18 and older seeking treatment. All are welcome to stay at our transitional housing facilities.</p>
                            <p>Every journey of healing begins with that first step. At First Step, we’re here to guide you towards long-term success and stability… not just today, but tomorrow, the next day, and for the rest of your life.</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default About;