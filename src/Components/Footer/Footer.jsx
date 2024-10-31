import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/nav-logo.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer-container' >
        <div className="footer-top-section">
            <img loading="lazy" src={Logo} alt="footer-logo" className="footer-logo" />
            <Link to="/about#contact-us" style={{all: "unset"}} >
            <button className="footer-top-section-button">
                <p>Contact Us</p>
                <Icon icon="iconamoon:arrow-right-1" width={20} height={20} color="#ffffff" />
            </button>
            </Link>
        </div>
        <div className="footer-bottom-section">
            <div className="fb-section">
                <Link style={{all: "unset"}} to="/" ><p className="fb-section-primary-text">Home</p></Link>
                <Link style={{all: "unset"}} to="/services" ><p className="fb-section-secondary-text">Our Services</p></Link>
                <Link style={{all: "unset"}} to="/works" ><p className="fb-section-secondary-text">Our Work</p></Link>
                <Link style={{all: "unset"}} to="/about" ><p className="fb-section-secondary-text">About Us</p></Link>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">service</p>
                <p className="fb-section-secondary-text">UI/UX Design</p>
                <p className="fb-section-secondary-text">Web & Mobile App Design</p>
                <p className="fb-section-secondary-text">Website Design</p>
                <p className="fb-section-secondary-text">Mobile Design</p>
                <p className="fb-section-secondary-text">Webflow Development</p>
                <p className="fb-section-secondary-text">Landing page</p>
                <p className="fb-section-secondary-text">IOS, Android, Cross-platform</p>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">mobile</p>
                <p className="fb-section-secondary-text">react native</p>
                <p className="fb-section-secondary-text">flutter</p>
                <p className="fb-section-secondary-text">ionic</p>
                <p className="fb-section-secondary-text">Swift</p>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">front end</p>
                <p className="fb-section-secondary-text">react js</p>
                <p className="fb-section-secondary-text">angular js</p>
                <p className="fb-section-secondary-text">vue js</p>
                <p className="fb-section-secondary-text">Next Js</p>
                <p className="fb-section-secondary-text">Svelte</p>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">uI / UX Design</p>
                <p className="fb-section-secondary-text">figma</p>
                <p className="fb-section-secondary-text">Adobe XD</p>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">backend</p>
                <p className="fb-section-secondary-text">node js</p>
                <p className="fb-section-secondary-text">PHP</p>
                <p className="fb-section-secondary-text">Django</p>
                <p className="fb-section-secondary-text">Gin</p>
            </div>
            <div className="fb-section">
                <p className="fb-section-primary-text">Graphics Design</p>
                <p className="fb-section-secondary-text">Adobe Illustrator</p>
                <p className="fb-section-secondary-text">Photoshop</p>
                <p className="fb-section-secondary-text">Canva</p>
            </div>
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright-text">&copy;2024 DOT Solutions, All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer