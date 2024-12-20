import HeroIcon from "../../assets/hero-icon.png";
import HeroProfilePic from "../../assets/hero-profile-pic.png";
import HeroPic1 from "../../assets/hero-pic1.png";
import HeroPic2 from "../../assets/hero-pic2.png";
import HeroPic3 from "../../assets/hero-pic3.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className='hs-container' >
            <img loading="lazy" src={HeroIcon} alt="hero-icon" className="hero-icon" />
            <div className="hs-top-section">
                <div className="hs-section1">
                    <p className="hs-section1-text">we always deliver</p>
                    <div className="hs-section1-box"></div>
                </div>
                <div className="hs-section2">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <h1 className="hs-section2-text1">developing world-class digital solutions</h1>
                    </div>
                    <div className="hs-section2-text2-wrapper">
                        <div className="h2-s2-t2-w1">
                            <h1 className="h2-s2-t2-w1-t">On-Time</h1>
                        </div>
                        <h1 className="h2-s2-t2-w2">&</h1>
                        <div className="h2-s2-t2-w3">
                            <h1 className="h2-s2-t2-w3-t">On-Budget</h1>
                        </div>
                    </div>
                </div>
                <div className="hs-section3">
                    <p className="hs-section3-text">business to business solutions, e-commerce website, ERP software, web development, mobile app development and more...</p>
                </div>
                <div className="hs-section4">
                    <Link to="/#contact-us" className="hs-section4-button">
                        <p className="hs-section4-button-text" >Hire Us</p>
                        <Icon icon="octicon:arrow-up-right-16" className="hs-section4-button-icon" color="#FFFFFF" />
                    </Link>
                    <img loading="lazy" src={HeroProfilePic} alt="profile-pic" className="hs-section4-image" />
                </div>
            </div>
            <div className="hs-bottom-section">
                <div className="hs-bottom-section1">
                    <h1 className="hs-bottom-section1-text">top mobile app developer</h1>
                    <img loading="lazy" src={HeroPic1} alt="hero-pic1" className="hs-bottom-section1-img" />
                </div>
                <div className="hs-bottom-section2">
                    <img loading="lazy" src={HeroPic2} alt="hero-pic-2" className="hs-bottom-section2-top" />
                    <div className="hs-bottom-section2-bottom">
                        <h1 className="hs-bottom-section2-text">website design</h1>
                        <img loading="lazy" src={HeroPic3} alt="hero-pic" className="hs-bottom-section2-bottom-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection