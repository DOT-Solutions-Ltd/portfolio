import Image1 from "../../assets/about-us1.png";
import Image2 from "../../assets/about-us2.png";
import Image3 from "../../assets/about-us3.png";
import Image4 from "../../assets/about-us4.png";
import { Icon } from "@iconify/react";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Teams from "../../Components/Teams/Teams";
import Faqs from "../../Components/FAQs/Faqs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about-us-container" >
      <div className="au-section1">
        <div className="au-section1-background"></div>
        <div className="au-section1-content-wrapper">
          <div className="au-section1-content1">
            <p className="au-section1-content1-text1">About</p>
            <h1 className="au-section1-content1-text2">We provide innovative design solutions & expert talents</h1>
            <p className="au-section1-content1-text3">From a small team of five people to a leading global remote team of professional designers & developers that strive to develop valuable digital products for people worldwide.</p>
          </div>
          <img src={Image1} alt="about-us-img" className="au-section1-content-image" />
        </div>
      </div>
      <div className="au-section2">
        <div className="au-section2-content1">
          <h1 className="au-section2-content1-text1">What is imprinted in our DNA</h1>
          <p className="au-section2-content1-text2">People, awareness and growth. The conceptual idea of the value system is a consistent trinity. Our people, being the main value of the company, come to effective growth while remaining purposeful.</p>
        </div>
        <div className="au-section2-content2">
          <img src={Image2} alt="au-img" className="au-section2-content2-image" />
          <div className="au-section2-content2-text-wrapper">
            <h4 className="au-section2-content2-text1">Our Mission</h4>
            <p className="au-section2-content2-text2">We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer-engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p>
          </div>
        </div>
        <div className="au-section2-content2">
          <div className="au-section2-content2-text-wrapper2">
            <h4 className="au-section2-content2-text1">Our Vision</h4>
            <p className="au-section2-content2-text2">Our vision is to be a global leader in Technology by 2030 and achieve the ultimate goal of our customers, employees, and partners with superior quality services and ultramodern solutions. We keep an eye on new market trends and room for growth, offering constant innovation and transformation to the industry and the economy.</p>
          </div>
          <img src={Image3} alt="au-img" className="au-section2-content2-image2" />
        </div>
      </div>
      <div id="au-section3" className="au-section3">
        <div className="au-section3-left">
          <h1 className="au-section3-left-text1">What we do</h1>
          <p className="au-section3-left-text2">Whether you are looking for large-scale custom software development, professional UI/UX design, maintenance updates and troubleshooting, or information technology consultation, we have the team to meet your specific needs.</p>
          <img src={Image4} alt="au-img" className="au-section3-left-image" />
        </div>
        <div className="au-section3-right">
          <div className="au-section3-right-box">
            <Icon icon="fluent:app-recent-20-regular" className="au-section3-right-box-icon" />
            <p className="au-section3-right-box-text">Mobile App</p>
          </div>
          <div className="au-section3-right-box">
            <Icon icon="material-symbols:design-services-outline" className="au-section3-right-box-icon" />
            <p className="au-section3-right-box-text">Website Design</p>
          </div>
          <div className="au-section3-right-box">
            <Icon icon="simple-icons:ios" className="au-section3-right-box-icon" />
            <p style={{ width: "101px" }} className="au-section3-right-box-text">IOS Development</p>
          </div>
          <div className="au-section3-right-box">
            <Icon icon="solar:figma-line-duotone" className="au-section3-right-box-icon" />
            <p className="au-section3-right-box-text">UI/UX design</p>
          </div>
          <div className="au-section3-right-box2">
            <Icon icon="fluent:window-dev-edit-16-regular" className="au-section3-right-box-icon2" />
            <p style={{ width: "101px" }} className="au-section3-right-box-text2">web-app development</p>
          </div>
          <div className="au-section3-right-box">
            <Icon icon="fluent:window-dev-tools-16-regular" className="au-section3-right-box-icon" />
            <p className="au-section3-right-box-text">backend dev</p>
          </div>
          <div className="au-section3-right-box">
            <Icon icon="mdi:resource-description-framework" className="au-section3-right-box-icon" />
            <p style={{ width: "101px" }} className="au-section3-right-box-text">ERP development</p>
          </div>
        </div>
      </div>
      <WhyUs />
      <Teams />
      <Faqs />
      <ContactUs id="contact-us" />
    </div>
  )
}

export default AboutUs