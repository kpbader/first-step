import './contact.css';
import Fade from 'react-reveal/Fade';
import { SlLocationPin } from "react-icons/sl";
import ContactForm from '../Contact-Form/contact-form';
import { BsTelephone } from 'react-icons/bs';

function Contact() {
    return (
        <section id="contact-page">
            <div id="cp-contact-container">
                <Fade left>
                    <ContactForm />
                </Fade>
                <Fade right>
                    <div id="map-and-info">
                        <p><BsTelephone /> (323) 419-1110</p>
                        <p><SlLocationPin /> 1800 Vine St., Suite 210
                            Los Angeles, CA 90028</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.6489427455967!2d-118.3262758!3d34.10413270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3ed11d5b7b%3A0x99f46e99e3954ee9!2s1800%20Vine%20St%20%23210%2C%20Los%20Angeles%2C%20CA%2090028!5e0!3m2!1sen!2sus!4v1666736738203!5m2!1sen!2sus" title="map" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Contact;