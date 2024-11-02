import WhyUs from "../../Components/WhyUs/WhyUs";
import Teams from "../../Components/Teams/Teams";
import Faqs from "../../Components/FAQs/Faqs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import OptimizedImage from "../../Components/OptimizedImage";
import "./AboutUs.css"

// Dynamic imports for images
const staticImages = {
  Image1: () => import("../../assets/about-us1.png"),
  Image2: () => import("../../assets/about-us2.png"),
  Image3: () => import("../../assets/about-us3.png")
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="au-section1">
        <div className="au-section1-background"></div>
        <div className="au-section1-content-wrapper">
          <div className="au-section1-content1">
            <p className="au-section1-content1-text1">About</p>
            <h1 className="au-section1-content1-text2">
              We provide innovative design solutions & expert talents
            </h1>
            <p className="au-section1-content1-text3">
              From a small team of five people to a leading global remote team of professional designers & developers that strive to develop valuable digital products for people worldwide.
            </p>
          </div>
          <OptimizedImage 
            src={staticImages.Image1}
            alt="about-us-img"
            className="au-section1-content-image"
            priority="high" // Since this is above the fold
          />
        </div>
      </div>

      <div className="au-section2">
        <div className="au-section2-content1">
          <h1 className="au-section2-content1-text1">
            What is imprinted in our DNA
          </h1>
          <p className="au-section2-content1-text2">
            People, awareness and growth. The conceptual idea of the value system is a consistent trinity. Our people, being the main value of the company, come to effective growth while remaining purposeful.
          </p>
        </div>

        <div className="au-section2-content2">
          <OptimizedImage 
            src={staticImages.Image2}
            alt="au-img"
            className="au-section2-content2-image"
          />
          <div className="au-section2-content2-text-wrapper">
            <h4 className="au-section2-content2-text1">Our Mission</h4>
            <p className="au-section2-content2-text2">
              We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer-engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.
            </p>
          </div>
        </div>

        <div className="au-section2-content2">
          <div className="au-section2-content2-text-wrapper2">
            <h4 className="au-section2-content2-text1">Our Vision</h4>
            <p className="au-section2-content2-text2">
              Our vision is to be a global leader in Technology by 2030 and achieve the ultimate goal of our customers, employees, and partners with superior quality services and ultramodern solutions. We keep an eye on new market trends and room for growth, offering constant innovation and transformation to the industry and the economy.
            </p>
          </div>
          <OptimizedImage 
            src={staticImages.Image3}
            alt="au-img"
            className="au-section2-content2-image2"
          />
        </div>
      </div>

      <WhyUs />
      <Teams />
      <Faqs />
      <ContactUs id="contact-us" />
    </div>
  );
};

export default AboutUs;