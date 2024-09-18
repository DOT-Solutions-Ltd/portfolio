import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Carousel from "../../Components/Carousel/Carousel";
import ServicesSection from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyUs/WhyUs";
import SampleImage1 from "../../assets/sample-image1.png";
import SampleImage2 from "../../assets/sample-image2.png";
import SampleImage3 from "../../assets/sample-image3.png";
import Teams from "../../Components/Teams/Teams";
import Faqs from "../../Components/FAQs/Faqs";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="home-page-container" >
            <NavBar />
            <HeroSection />
            <Carousel />
            <ServicesSection />
            <WhyUs />
            <div className="latest-projects-container">
                <div className="lp-text-cont">
                    <p className="lp-text1">Project</p>
                    <h2 className="lp-text2" >Latest Projects</h2>
                </div>
                <Icon icon="octicon:arrow-up-right-16" height={108} width={108} color="#000000" style={{ position: "absolute", bottom: "31px", right: "253px", cursor: "pointer" }} />
                <div className="lp-samples-container">
                    <div className="lp-sample1">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <button className="lp-sample1-icon-wrapper">
                                <Icon icon="octicon:arrow-up-right-16" height={28} width={28} color="#FFFFFF" />
                            </button>
                        </div>
                        <img src={SampleImage1} alt="sample-img" className="lp-sample1-img" />
                    </div>
                    <div className="lp-sample2">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <button className="lp-sample1-icon-wrapper">
                                <Icon icon="octicon:arrow-up-right-16" height={28} width={28} color="#FFFFFF" />
                            </button>
                        </div>
                        <img src={SampleImage2} alt="sample-img" className="lp-sample1-img" />
                    </div>
                    <div className="lp-sample3">
                        <div className="lp-sample1-top">
                            <p className="lp-sample1-text">Sample of Our Projects</p>
                            <button className="lp-sample1-icon-wrapper">
                                <Icon icon="octicon:arrow-up-right-16" height={28} width={28} color="#FFFFFF" />
                            </button>
                        </div>
                        <img src={SampleImage3} alt="sample-img" className="lp-sample1-img" />
                    </div>
                </div>
            </div>
            <Teams />
            <div className="tools-container">
                <h1 className="tools-text">some of the technologies we work with</h1>
                <Marquee pauseOnHover={true} className="tools-carousel" >
                    <Icon icon="skill-icons:javascript" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:html" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:css" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:tailwindcss-dark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:react-dark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:golang" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:nodejs-wordmark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:mongodb-wordmark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:git" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:csharp" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="logos:python" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:typescript" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:aws-dark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="logos:vercel" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="file-icons:expo" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="logos:npm" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="logos:nextjs" height={85} width={85} style={{marginRight: "47px"}} />
                    <Icon icon="devicon-plain:reactrouter-wordmark" height={85} width={85} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:redux" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:yarn-light" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:redis-wordmark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:illustrator" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:figma-dark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:photoshop" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:canva" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:docker-wordmark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="devicon:jira-wordmark" height={65} width={65} style={{marginRight: "47px"}} />
                    <Icon icon="logos:postman" height={115} width={115} style={{marginRight: "47px"}} />
                    <Icon icon="skill-icons:github-light" height={65} width={65} style={{marginRight: "47px"}} />
                </Marquee>
            </div>
            <Faqs />
        </div>
    )
}

export default HomePage