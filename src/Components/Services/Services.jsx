import ServicesIcon1 from "../../assets/services-icon1.png";
import ServicesIcon2 from "../../assets/services-icon2.png";
import ServicesIcon3 from "../../assets/services-icon3.png";
import { Icon } from "@iconify/react";
import "./Services.css"

const Services = () => {
    return (
        <div className='services-container' >
            <div className="services-box"></div>
            <img loading="lazy" src={ServicesIcon1} alt="services-icon" className="services-icon1" />
            <img loading="lazy" src={ServicesIcon2} alt="services-icon" className="services-icon2" />
            <img loading="lazy" src={ServicesIcon3} alt="services-icon" className="services-icon3" />
            <h1 className="services-section1-text2">these are some of our software services</h1>
            <div className="services-sections-wrapper">
                <div className="services-section1">
                    <h1 className="services-section1-text">these are some of our software services</h1>
                    <div className="services-section1-box-wrapper">
                        <div className="services-section1-box">
                            <Icon icon="fluent:app-recent-20-regular" className="services-sections-box-icon" />
                            <p className="services-section1-box-text">Mobile App</p>
                        </div>
                        <div className="services-section1-box">
                            <Icon icon="material-symbols:design-services-outline" className="services-sections-box-icon" />
                            <p className="services-section1-box-text">Website Design</p>
                        </div>
                        <div className="services-section1-box">
                            <Icon icon="simple-icons:ios" className="services-sections-box-icon" />
                            <p style={{ width: "101px" }} className="services-section1-box-text">IOS Development</p>
                        </div>
                    </div>
                </div>
                <div className="services-section2">
                    <div className="services-section1-box">
                        <Icon icon="solar:figma-line-duotone" className="services-sections-box-icon" />
                        <p className="services-section1-box-text">UI/UX design</p>
                    </div>
                    <div className="services-section1-box2">
                        <Icon icon="fluent:window-dev-edit-16-regular" className="services-sections-box-icon2" />
                        <p style={{ width: "101px" }} className="services-section1-box-text2">web-app development</p>
                    </div>
                    <div className="services-section1-box">
                        <Icon icon="fluent:window-dev-tools-16-regular" className="services-sections-box-icon" />
                        <p className="services-section1-box-text">backend dev</p>
                    </div>
                    <div className="services-section1-box">
                        <Icon icon="mdi:resource-description-framework" className="services-sections-box-icon" />
                        <p style={{ width: "101px" }} className="services-section1-box-text">ERP development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services