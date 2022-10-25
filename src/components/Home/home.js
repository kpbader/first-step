import "./home.css";
import splashVid from "../../assets/images/splash-video.mp4";

function Home() {
    return (
        <section id="home-page">
           <div id="home-splash">
                <video autoPlay muted loop >
                <source src={splashVid} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
               <h2>Housing and employment assistance to create stability</h2>
           </div>
        </section>
    )
};

export default Home;