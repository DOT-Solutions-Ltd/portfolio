import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Carousel from "../../Components/Carousel/Carousel";
import ServicesSection from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Teams from "../../Components/Teams/Teams";
import Faqs from "../../Components/FAQs/Faqs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import OptimizedImage from "../../Components/OptimizedImage";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./HomePage.css"

// Dynamic imports for sample images
const sampleImages = {
    SampleImage1: () => import("../../assets/ow-image16.jpg"),
    SampleImage2: () => import("../../assets/ow-image11.png"),
    SampleImage3: () => import("../../assets/ow-image17.avif")
};

const HomePage = () => {
    return (
        <div className="home-page-container">
            <HeroSection />
            <Carousel />
            <ServicesSection />
            <WhyUs />
            <div className="latest-projects-container">
                <div className="lp-text-cont">
                    <p className="lp-text1">Project</p>
                    <h2 className="lp-text2">Latest Projects</h2>
                </div>
                <Link to="/works" style={{ all: "unset" }}>
                    <Icon 
                        icon="octicon:arrow-up-right-16" 
                        height={108} 
                        width={108} 
                        color="#000000" 
                        className="arrow-up-right-16" 
                    />
                </Link>
                <div className="lp-samples-container">
                    {/* Sample Project 1 */}
                    <div className="lp-sample1">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <Link to="/works#ow-content1" className="lp-sample1-icon-wrapper">
                                <Icon 
                                    icon="octicon:arrow-up-right-16" 
                                    height={28} 
                                    width={28} 
                                    color="#FFFFFF" 
                                />
                            </Link>
                        </div>
                        <OptimizedImage 
                            src={sampleImages.SampleImage1}
                            alt="Project Sample 1"
                            className="lp-sample1-img"
                            priority="high" // First visible sample
                        />
                    </div>

                    {/* Sample Project 2 */}
                    <div className="lp-sample2">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <Link to="/works#ow-content2" className="lp-sample1-icon-wrapper">
                                <Icon 
                                    icon="octicon:arrow-up-right-16" 
                                    height={28} 
                                    width={28} 
                                    color="#FFFFFF" 
                                />
                            </Link>
                        </div>
                        <OptimizedImage 
                            src={sampleImages.SampleImage2}
                            alt="Project Sample 2"
                            className="lp-sample1-img"
                        />
                    </div>

                    {/* Sample Project 3 */}
                    <div className="lp-sample3">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <Link to="/works#ow-content3" className="lp-sample1-icon-wrapper">
                                <Icon 
                                    icon="octicon:arrow-up-right-16" 
                                    height={28} 
                                    width={28} 
                                    color="#FFFFFF" 
                                />
                            </Link>
                        </div>
                        <OptimizedImage 
                            src={sampleImages.SampleImage3}
                            alt="Project Sample 3"
                            className="lp-sample1-img"
                        />
                    </div>
                </div>
            </div>
            <Teams />
            <div className="tools-container">
                <h1 className="tools-text">some of the technologies we work with</h1>
                <Marquee pauseOnHover={true} className="tools-carousel">
                    {/* Technology icons remain unchanged as they are already optimized */}
                    <Icon icon="skill-icons:javascript" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:html" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:css" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:tailwindcss-dark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:react-dark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:golang" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:nodejs-wordmark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:mongodb-wordmark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:git" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:csharp" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="logos:python" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:typescript" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:aws-dark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="logos:vercel" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="file-icons:expo" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="logos:npm" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="logos:nextjs" height={85} width={85} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon-plain:reactrouter-wordmark" height={85} width={85} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:redux" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:yarn-light" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:redis-wordmark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:illustrator" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:figma-dark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:photoshop" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:canva" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:docker-wordmark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="devicon:jira-wordmark" height={65} width={65} style={{ marginRight: "47px" }} />
                    <Icon icon="logos:postman" height={115} width={115} style={{ marginRight: "47px" }} />
                    <Icon icon="skill-icons:github-light" height={65} width={65} style={{ marginRight: "47px" }} />
                </Marquee>
            </div>
            <Faqs />
            <ContactUs id="contact-us" />
        </div>
    );
};

export default HomePage;