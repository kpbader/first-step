import './footer.css';
import footerLogo from '../../assets/images/first-step-logo_v5.png';

function Footer() {
    return (
        <section id="footer">
            <div id="footer-logo">
                <img src={footerLogo} alt="logo" />
            </div>
        </section>
    )
};

export default Footer;