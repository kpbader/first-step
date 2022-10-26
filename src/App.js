import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import WWD from "./components/WWD/wwd";
import About from "./components/About/about";
import Mission from "./components/Mission/mission";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/what-we-do" element={<WWD />}></Route>
          <Route path="/our-mission" element={<Mission />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
