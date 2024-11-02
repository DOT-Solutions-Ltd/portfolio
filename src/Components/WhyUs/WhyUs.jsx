import OptimizedImage from "../OptimizedImage";
import "./WhyUs.css"

// Dynamic imports for all images
const staticImages = {
    Wu1: () => import("../../assets/wu1.png"),
    Wu2: () => import("../../assets/wu2.png"),
    Wu4: () => import("../../assets/wu4.png"),
    Hero: () => import("../../assets/hero-profile-pic.png"),
    Wu5: () => import("../../assets/wu5.png"),
    WuLeft1: () => import("../../assets/wu-left1.png"),
    WuLeft2: () => import("../../assets/wu-left2.png"),
    WuLeft3: () => import("../../assets/wu-left3.png"),
    WuRight1: () => import("../../assets/wu-right1.png"),
    WuRight2: () => import("../../assets/wu-right2.png"),
    WuRight3: () => import("../../assets/wu-right3.png"),
    WuRight4: () => import("../../assets/wu-right4.png")
};

const WhyUs = () => {
    return (
        <div className='wu-container'>
            <p className="wu-text1">why us</p>
            <h1 className="wu-text2">we @dOTsolutions provide trusted & best solutions</h1>
            <div>
                <div className="wu-section1">
                    <OptimizedImage 
                        src={staticImages.Wu4}
                        alt="wrapper"
                        className="wu-wrapper1"
                        priority="high" // First visible wrapper
                    />
                    <OptimizedImage 
                        src={staticImages.Wu5}
                        alt="wrapper"
                        className="wu-wrapper2"
                    />
                    <div className="wu-section1-content-wrapper">
                        <OptimizedImage 
                            src={staticImages.Wu1}
                            alt="wu-img"
                            className="wu-s-t-w-img"
                        />
                        <div className="wu-s-c-t-w">
                            <h1 className="wu-s-t-w-text1">
                                we develop innovative, creative and industry standard software that leaves our clients both amazed & satisfied
                            </h1>
                            <div className="wu-s-c-b-w">
                                <OptimizedImage 
                                    src={staticImages.Wu2}
                                    alt="wu-img"
                                    className="wu-s-c-b-w-img"
                                />
                                <p className="wu-s-c-b-w-text">Customer Review</p>
                                <OptimizedImage 
                                    src={staticImages.Hero}
                                    alt="hero"
                                    className="wu-s-c-b-w-img2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wu-section2">
                    <div className="wu-section2-left">
                        <h1 className="wu-section2-left-text">we value your time here</h1>
                        <OptimizedImage 
                            src={staticImages.WuLeft1}
                            alt="wu-img"
                            className="wu-section-left-icon"
                        />
                        <OptimizedImage 
                            src={staticImages.WuLeft2}
                            alt="wu-img"
                            className="wu-section-left-icon2"
                        />
                        <OptimizedImage 
                            src={staticImages.WuLeft3}
                            alt="wu-img"
                            className="wu-section-left-icon3"
                        />
                    </div>
                    <div className="wu-section2-right">
                        <h1 className="wu-section2-right-text">designing sophisticated websites</h1>
                        <OptimizedImage 
                            src={staticImages.WuRight1}
                            alt="wu-image"
                            className="wu-section2-right-img"
                        />
                        <OptimizedImage 
                            src={staticImages.WuRight2}
                            alt="wu-image"
                            className="wu-section2-right-img2"
                        />
                        <OptimizedImage 
                            src={staticImages.WuRight3}
                            alt="wu-image"
                            className="wu-section2-right-img3"
                        />
                        <OptimizedImage 
                            src={staticImages.WuRight4}
                            alt="wu-image"
                            className="wu-section2-right-img4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;