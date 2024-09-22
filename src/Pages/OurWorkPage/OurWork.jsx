import { portfolioData } from "../../data";
import { Icon } from "@iconify/react";
import Portfolio1 from "../../assets/ow-image16.jpg";
import Portfolio2 from "../../assets/ow-image11.png";
import Portfolio3 from "../../assets/ow-image17.avif";
import CountUp from 'react-countup';
import "./OurWork.css"

const OurWork = () => {
  return (
    <div className='ow-container' >
      <div className="ow-section1">
        <h1 className="ow-section1-text1">Our Portfolio of Success Stories.</h1>
        <p className="ow-section1-text2">We work with clients in all sectors and of all sizes, from bootstrapped startups to Fortune</p>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "140px", marginTop: "60px", justifyContent: "center"}} >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "200px", height: "200px", border: "1px solid #ffffff", borderRadius: "100px", }} >
            <p style={{fontSize: "50px", lineHeight: "50px", color: "#ffffff", fontWeight: "500", margin: "0px"}} >
              <span><CountUp end={5} /></span>
              <span>+</span>
            </p>
            <p style={{fontSize: "18px", lineHeight: "18px", fontWeight: "400", margin: "0px", color: "#ffffff90"}} >Years of Experience</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "200px", height: "200px", border: "1px solid #ffffff", borderRadius: "100px", }} >
            <p style={{fontSize: "50px", lineHeight: "50px", color: "#ffffff", fontWeight: "500", margin: "0px"}} >
            <span><CountUp end={35} duration={5} /></span>
            <span>+</span>
            </p>
            <p style={{fontSize: "18px", lineHeight: "18px", fontWeight: "400", margin: "0px", color: "#ffffff90"}} >Production Projects</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "200px", height: "200px", border: "1px solid #ffffff", borderRadius: "100px", }} >
            <p style={{fontSize: "50px", lineHeight: "50px", color: "#ffffff", fontWeight: "500", margin: "0px"}} >
            <span><CountUp end={28} duration={5} /></span>
            <span>+</span>
            </p>
            <p style={{fontSize: "18px", lineHeight: "18px", fontWeight: "400", margin: "0px", color: "#ffffff90"}} >Technologies Used</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "200px", height: "200px", border: "1px solid #ffffff", borderRadius: "100px", }} >
            <p style={{fontSize: "50px", lineHeight: "50px", color: "#ffffff", fontWeight: "500", margin: "0px"}} >
            <span><CountUp end={6}/></span>
            <span>+</span>
            </p>
            <p style={{fontSize: "18px", lineHeight: "18px", fontWeight: "400", margin: "0px", color: "#ffffff90"}} >Enterprise Clients</p>
          </div>
        </div>
      </div>
      <div className="ow-section2">
        <div id="ow-content1" className="ow-section2-content1-wrapper">
          <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
          <div className="ow-section2-content1-image-cont">
            <img src={Portfolio1} alt="ow-image" className="ow-section2-content1-image" />
          </div>
          <div className="ow-section2-content1-text-cont">
            <h4 className="ow-section2-content1-title">CharterXE Admin Dashboard</h4>
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
            <img src={Portfolio2} alt="ow-image" className="ow-section2-content1-image" />
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
            <img src={Portfolio3} alt="ow-image" className="ow-section2-content1-image" />
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
        {
          portfolioData.map((item) => {
            return (
              <>
                <div id={item.id} key={item.id} style={{ backgroundColor: item.backgroundColor }} className="ow-section2-content1-wrapper">
                  <h1 className="ow-section2-content1-background">OUR PRODUCTS</h1>
                  <div className="ow-section2-content1-image-cont">
                    <img src={item.image} alt="ow-image" className="ow-section2-content1-image" />
                  </div>
                  <div className="ow-section2-content1-text-cont">
                    <h4 className="ow-section2-content1-title">{item.title}</h4>
                    <p className="ow-section2-content1-body">{item.content}</p>
                    <div className="ow-section2-content1-tags">
                      <div className="ow-section2-content1-tags-cont">
                        {
                          item.devTags.map((item, index) => (
                            <p key={index} className="ow-section2-content1-tag1">{item.tag}</p>
                          ))
                        }
                      </div>
                      <div className="ow-section2-content1-source-wrapper">
                        {
                          item.projectLink && (
                            <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="ow-section2-content1-sample">
                              <Icon icon="ion:arrow-up-right-box-outline" width={25} height={25} color="#ffffff" className="ow-icon" />
                              <p className="ow-section2-content1-sample-text">View Project</p>
                            </a>
                          )
                        }
                        {
                          item.sourceCode && (
                            <a href={item.sourceCode} className="ow-section2-content1-source">
                              <Icon icon="ant-design:github-filled" width={25} height={25} color="#ffffff" className="ow-icon" />
                              <p className="ow-section2-content1-source-text">Source Code</p>
                            </a>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default OurWork