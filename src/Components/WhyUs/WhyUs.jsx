import Wu1 from "../../assets/wu1.png";
import Wu2 from "../../assets/wu2.png";
import Wu4 from "../../assets/wu4.png";
import Hero from "../../assets/hero-profile-pic.png";
import Wu5 from "../../assets/wu5.png";
import WuLeft1 from "../../assets/wu-left1.png";
import WuLeft2 from "../../assets/wu-left2.png";
import WuLeft3 from "../../assets/wu-left3.png";
import WuRight1 from "./../../assets/wu-right1.png";
import WuRight2 from "./../../assets/wu-right2.png";
import WuRight3 from "./../../assets/wu-right3.png";
import WuRight4 from "./../../assets/wu-right4.png";
import "./WhyUs.css"

const WhyUs = () => {
    return (
        <div className='wu-container' >
            <p className="wu-text1">why us</p>
            <h1 className="wu-text2">we @dOTsolutions provide trusted & best solutions</h1>
            <div>
                <div className="wu-section1">
                    <img src={Wu4} alt="wrapper" className="wu-wrapper1" />
                    <img src={Wu5} alt="wrapper" className="wu-wrapper2" />
                    <div className="wu-section1-content-wrapper">
                        <img src={Wu1} alt="wu-img" className="wu-s-t-w-img" />
                        <div className="wu-s-c-t-w">
                            <h1 className="wu-s-t-w-text1">we create innovative, creative but standardized software that leaves our clients both amazed & satisfied</h1>
                            <div className="wu-s-c-b-w">
                                <img src={Wu2} alt="wu-img" className="wu-s-c-b-w-img" />
                                <p className="wu-s-c-b-w-text">Customer Review</p>
                                <img src={Hero} alt="hero" className="wu-s-c-b-w-img2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wu-section2">
                    <div className="wu-section2-left">
                        <h1 className="wu-section2-left-text">we value your time here</h1>
                        <img src={WuLeft1} alt="wu-img" className="wu-section-left-icon" />
                        <img src={WuLeft2} alt="wu-img" className="wu-section-left-icon2" />
                        <img src={WuLeft3} alt="wu-img" className="wu-section-left-icon3" />
                    </div>
                    <div className="wu-section2-right">
                        <h1 className="wu-section2-right-text">designing sophisticated websites</h1>
                        <img src={WuRight1} alt="wu-image" className="wu-section2-right-img" />
                        <img src={WuRight2} alt="wu-image" className="wu-section2-right-img2" />
                        <img src={WuRight3} alt="wu-image" className="wu-section2-right-img3" />
                        <img src={WuRight4} alt="wu-image" className="wu-section2-right-img4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs