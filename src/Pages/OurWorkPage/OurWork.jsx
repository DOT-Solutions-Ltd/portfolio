import { portfolioData } from "../../data";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";
import useBackgroundImage from "../../Hooks/useBackgroundImageOptimized";
import OptimizedImage from "../../Components/OptimizedImage";
import backgroundImage from "../../assets/new-bg.png";
import "./OurWork.css"

// Dynamic imports for the static images
const staticImages = {
  Portfolio1: () => import("../../assets/ow-image16.jpg"),
  Portfolio2: () => import("../../assets/ow-image11.png"),
  Portfolio3: () => import("../../assets/ow-image17.avif"),
  backgroundImage: () => import("../../assets/ow-image.png")
};

const OurWork = () => {
  const [elementRef, isLoaded] = useBackgroundImage(backgroundImage);

  return (
    <div className='ow-container'>
      <div
        className="ow-section1"
      >
        <img src={backgroundImage} alt="background" className="ow-section1-background" />
        <div className="ow-section1-content" >
          <h1 className="ow-section1-text1">Our Portfolio of Success Stories.</h1>
          <p className="ow-section1-text2">We work with clients in all sectors and of all sizes, from bootstrapped startups to Fortune 500 and government parastatals</p>
          <div className="ow-data-cont">
            <div className="ow-data-item">
              <p className="ow-data-item-text">
                <span><CountUp end={5} /></span>
                <span>+</span>
              </p>
              <p className="ow-data-item-text2">Years of Experience</p>
            </div>
            <div className="ow-data-item">
              <p className="ow-data-item-text">
                <span><CountUp end={35} duration={5} /></span>
                <span>+</span>
              </p>
              <p className="ow-data-item-text2">Production Projects</p>
            </div>
            <div className="ow-data-item">
              <p className="ow-data-item-text">
                <span><CountUp end={28} duration={5} /></span>
                <span>+</span>
              </p>
              <p className="ow-data-item-text2">Technologies Used</p>
            </div>
            <div className="ow-data-item">
              <p className="ow-data-item-text">
                <span><CountUp end={6} /></span>
                <span>+</span>
              </p>
              <p className="ow-data-item-text2">Enterprise Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ow-section2">
        <div id="ow-content1" className="ow-section2-content1-wrapper">
          <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
          <div className="ow-section2-content1-image-cont">
            <OptimizedImage
              src={staticImages.Portfolio1}
              alt="CharterXE"
              className="ow-section2-content1-image"
              priority="high"
            />
          </div>
          <div className="ow-section2-content1-text-cont">
            <h4 className="ow-section2-content1-title">CharterXE</h4>
            <p className="ow-section2-content1-body">Designed for team-based flight booking management, the dashboard streamlines operations for administrators. Features include team management, booking monitoring, flight coordination, inquiry handling, and performance tracking for mobile app users.</p>
            <div className="ow-section2-content1-tags">
              <div className="ow-section2-content1-tags-cont">
                <p className="ow-section2-content1-tag1">Vue.js</p>
                <p className="ow-section2-content1-tag1">Tailwind CSS</p>
                <p className="ow-section2-content1-tag1">Material UI</p>
                <p className="ow-section2-content1-tag1">Vuex</p>
                <p className="ow-section2-content1-tag1">Web Application</p>
              </div>
              <div className="ow-section2-content1-source-wrapper">
                <a href="https://admin.charterxe.com/" target="_blank" rel="noopener noreferrer" className="ow-section2-content1-sample">
                  <Icon icon="ion:arrow-up-right-box-outline" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-sample-text">View Project</p>
                </a>
                <a href="" className="ow-section2-content1-source">
                  <Icon icon="ant-design:github-filled" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-source-text">Source Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="ow-content2" style={{ backgroundColor: "#00ABA3" }} className="ow-section2-content1-wrapper">
          <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
          <div className="ow-section2-content1-image-cont">
            <OptimizedImage
              src={staticImages.Portfolio2}
              alt="Villaja E-commerce"
              className="ow-section2-content1-image"
            />
          </div>
          <div className="ow-section2-content1-text-cont">
            <h4 className="ow-section2-content1-title">Villaja E-commerce</h4>
            <p className="ow-section2-content1-body">A de-centralized marketplace web-application featuring robust capabilities: escrow ordering system, seamless transactions via payment gateways, real-time order tracking, multi-store vendors, secure authentication, and intuitive dashboards for both users and administrators, plus many more features.</p>
            <div className="ow-section2-content1-tags">
              <div className="ow-section2-content1-tags-cont">
                <p className="ow-section2-content1-tag1">React.js</p>
                <p className="ow-section2-content1-tag1">Node.js</p>
                <p className="ow-section2-content1-tag1">MongoDB</p>
                <p className="ow-section2-content1-tag1">Paystack</p>
                <p className="ow-section2-content1-tag1">Web Application</p>
              </div>
              <div className="ow-section2-content1-source-wrapper">
                <a href="https://www.villaja.com/" target="_blank" rel="noopener noreferrer" className="ow-section2-content1-sample">
                  <Icon icon="ion:arrow-up-right-box-outline" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-sample-text">View Project</p>
                </a>
                <a href="" className="ow-section2-content1-source">
                  <Icon icon="ant-design:github-filled" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-source-text">Source Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="ow-content3" style={{ backgroundColor: "#8F2A2C" }} className="ow-section2-content1-wrapper">
          <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
          <div className="ow-section2-content1-image-cont">
            <OptimizedImage
              src={staticImages.Portfolio3}
              alt="Immigration Question"
              className="ow-section2-content1-image"
            />
          </div>
          <div className="ow-section2-content1-text-cont">
            <h4 className="ow-section2-content1-title">Immigration Question | Open Forum Web</h4>
            <p className="ow-section2-content1-body">Integrates user and attorney profiles for collaborative immigration Q&A. Robust authentication ensures secure interactions. Features include threaded discussions and advanced search for organized, in-depth topic exploration..</p>
            <div className="ow-section2-content1-tags">
              <div className="ow-section2-content1-tags-cont">
                <p className="ow-section2-content1-tag1">React.js</p>
                <p className="ow-section2-content1-tag1">Tailwind CSS</p>
                <p className="ow-section2-content1-tag1">Redux</p>
                <p className="ow-section2-content1-tag1">Axios</p>
                <p className="ow-section2-content1-tag1">Web Application</p>
              </div>
              <div className="ow-section2-content1-source-wrapper">
                <a href="https://immigrationquestion.com" target="_blank" rel="noopener noreferrer" className="ow-section2-content1-sample">
                  <Icon icon="ion:arrow-up-right-box-outline" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-sample-text">View Project</p>
                </a>
                <a href="" className="ow-section2-content1-source">
                  <Icon icon="ant-design:github-filled" width={25} height={25} color="#ffffff" className="ow-icon" />
                  <p className="ow-section2-content1-source-text">Source Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {portfolioData.map((item) => (
          <div
            id={item.id}
            key={item.id}
            style={{ backgroundColor: item.backgroundColor }}
            className="ow-section2-content1-wrapper"
          >
            <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
            <div className="ow-section2-content1-image-cont">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className={`${item.id === 11 || item.id === 8 ? "ow-section2-content1-image2" : "ow-section2-content1-image"}`}
              />
            </div>
            <div className="ow-section2-content1-text-cont">
              <h4 className="ow-section2-content1-title">{item.title}</h4>
              <p className="ow-section2-content1-body">{item.content}</p>
              <div className="ow-section2-content1-tags">
                <div className="ow-section2-content1-tags-cont">
                  {item.devTags.map((tag, index) => (
                    <p key={index} className="ow-section2-content1-tag1">{tag.tag}</p>
                  ))}
                </div>
                <div className="ow-section2-content1-source-wrapper">
                  {item.projectLink && (
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="ow-section2-content1-sample">
                      <Icon icon="ion:arrow-up-right-box-outline" color="#ffffff" className="ow-icon" />
                      <p className="ow-section2-content1-sample-text">View Project</p>
                    </a>
                  )}
                  {item.sourceCode && (
                    <a href={item.sourceCode} className="ow-section2-content1-source">
                      <Icon icon="ant-design:github-filled" color="#ffffff" className="ow-icon" />
                      <p className="ow-section2-content1-source-text">Source Code</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;