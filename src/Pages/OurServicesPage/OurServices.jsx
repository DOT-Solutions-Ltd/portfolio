import { portfolioData } from "../../data";
import Pic1 from "../../assets/os-pic1.png";
import Pic2 from "../../assets/os-pic2.png";
import Pic3 from "../../assets/os-pic3.png";
import Pic4 from "../../assets/os-pic4.png";
import { Icon } from "@iconify/react";
import "./OurServices.css"

const OurServices = () => {
  const selectedProjects = portfolioData.filter((item) => [5, 6, 10].includes(item.id));

  return (
    <div className='os-container'>
      <div className="os-section1">
        <h1 className="os-section1-text1">web development</h1>
        <p className="os-section1-text2">Get highly-performing, fully functional and secure web experiences that are able to scale as your business grows. Our front-end and back-end development team is here to help you improve, redesign, or build your website from a scratch.</p>
      </div>
      <div className="os-section2">
        <div className="os-section2-content1">
          <img src={Pic1} alt="os-pic" className="os-section2-content1-image" />
          <div className="os-section2-content1-text-wrapper">
            <h4 className="os-section2-content1-text1">Web Application Design</h4>
            <p className="os-section2-content1-text2">Our incredible UI/UX design team works with each client individually to create a beautiful, intuitive product. We work with your existing logo/branding guidelines to create User Flow, visual and clickable mockups using Sketch and Invision. We are able to deliver a web application design that is responsive, user-friendly and logical. Our team of programmers and developers are well-versed in a variety of languages, giving our clients more options when building an application from scratch with specific functions and requirements. We are not fans of traditional app developing packages, as these often lead to bugs and limits the ability to implement truly unique features into our clients&apos projects.Instead, we enjoy working one on one with each of our individual clients to determine their needs while also developing a solution and project scope that works best without eliminating the overall ability of the final web app itself. At Essential Designs, we work only with the best senior programmers and developers around, allowing our clients to get the most out of any app they envision from scratch.</p>
          </div>
        </div>
        <div className="os-section2-content1">
          <div className="os-section2-content1-text-wrapper">
            <h4 className="os-section2-content1-text1">Customized Systems</h4>
            <p className="os-section2-content1-text2">Our experience covers all kinds of customized systems from office management and order tracking to stock trading applications. We’ve even architected systems to manage Canadian resource companies and mines. We do not focus on only one industry or sector, we build systems for any industry that requires our expertise.We build a fully customized system for each of our clients. What this means is that we are not taking a pre-made software package and refitting it to your business, but building a system from the ground up tailored to your needs. You will never be stuck at some point in the future with a packaged limit to changes that you can make or features that cannot be adjusted – the system is 100% yours and allows for customization at any time. This also means that you will not have hundreds of features and fields in your application that are not of benefit or use to you, every item will be added specifically based on your need for it, making the system very streamlined. We do not get to use your code and product to sell to the next customer as well, you own all rights and licenses to the end code.</p>
          </div>
          <img src={Pic2} alt="os-pic" className="os-section2-content1-image" />
        </div>
        <div className="os-section2-content1">
          <img src={Pic3} alt="os-pic" className="os-section2-content1-image" />
          <div className="os-section2-content1-text-wrapper">
            <h4 className="os-section2-content1-text1">Responsive Design</h4>
            <p className="os-section2-content1-text2">Responsive design is an exciting breakthrough in web design technology. Finally, your online presence can automatically adapt to any screen size, on any device. With responsive design, you only need one version of your app or website to serve the different preferences of the entire market. Often, with a responsive web application, you don’t even need to build a native mobile version of your app.Responsive design works for a wide range of web-based software applications; from admin panels to portals, to SaaS projects. Buy stocks, review sales reports, order more pallets of wood – whatever you need, view and easily accomplish your tasks on any device. Remember, no matter how large or complicated your project may be, we have the skills to create an intuitive experience for your users and a headache-free experience for you. Contact us today to learn how smooth the process can be.</p>
          </div>
        </div>
        <div className="os-section2-content1">
          <div className="os-section2-content1-text-wrapper">
            <h4 className="os-section2-content1-text1">A Competitive Advantage</h4>
            <p className="os-section2-content1-text2">Our experience covers all kinds of customized systems from office management and order tracking to stock trading applications. We’ve even architected systems to manage Canadian resource companies and mines. We do not focus on only one industry or sector, we build systems for any industry that requires our expertise.We build a fully customized system for each of our clients. What this means is that we are not taking a pre-made software package and refitting it to your business, but building a system from the ground up tailored to your needs. You will never be stuck at some point in the future with a packaged limit to changes that you can make or features that cannot be adjusted – the system is 100% yours and allows for customization at any time. This also means that you will not have hundreds of features and fields in your application that are not of benefit or use to you, every item will be added specifically based on your need for it, making the system very streamlined. We do not get to use your code and product to sell to the next customer as well, you own all rights and licenses to the end code.</p>
          </div>
          <img src={Pic4} alt="os-pic" className="os-section2-content1-image" />
        </div>
      </div>
      <div>
        {
          selectedProjects.map((item) => (
            <div id={item.id} key={item.id} style={{ backgroundColor: item.backgroundColor }} className="oww-section2-content1-wrapper">
              <h1 className="oww-section2-content1-background">OUR PRODUCTS</h1>
              <div className="oww-section2-content1-image-cont">
                <img src={item.image} alt="ow-image" className="oww-section2-content1-image" />
              </div>
              <div className="oww-section2-content1-text-cont">
                <h4 className="oww-section2-content1-title">{item.title}</h4>
                <p className="oww-section2-content1-body">{item.content}</p>
                <div className="oww-section2-content1-tags">
                  <div className="oww-section2-content1-tags-cont">
                    {
                      item.devTags.map((item, index) => (
                        <p key={index} className="oww-section2-content1-tag1">{item.tag}</p>
                      ))
                    }
                  </div>
                  <div className="oww-section2-content1-source-wrapper">
                    {
                      item.projectLink && (
                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="oww-section2-content1-sample">
                          <Icon icon="ion:arrow-up-right-box-outline" color="#ffffff" className="oww-icon" />
                          <p className="oww-section2-content1-sample-text">View Project</p>
                        </a>
                      )
                    }
                    {
                      item.sourceCode && (
                        <a href={item.sourceCode} className="oww-section2-content1-source">
                          <Icon icon="ant-design:github-filled" color="#ffffff" className="oww-icon" />
                          <p className="oww-section2-content1-source-text">Source Code</p>
                        </a>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurServices