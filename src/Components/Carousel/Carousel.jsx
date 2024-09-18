import Marquee from "react-fast-marquee";
import CarouselIcon from "../../assets/carousel-icon.png";
import "./Carousel.css"

const Carousel = () => {
    return (
        <Marquee autoFill pauseOnHover={true} className="carousel-container" >
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">website development</h3>
            </div>
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">UI/UX Design</h3>
            </div>
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">IOS, Android, Cross-platform</h3>
            </div>
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">Web & Mobile App Design</h3>
            </div>
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">Production Scale Web-portals and platforms</h3>
            </div>
            <div className="carousel-content">
                <img src={CarouselIcon} alt="carousel-icon" className="carousel-icon" />
                <h3 className="carousel-text">E-commerce web and mobile applications</h3>
            </div>
        </Marquee>
    )
}

export default Carousel