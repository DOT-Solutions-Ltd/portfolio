import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Carousel from "../../Components/Carousel/Carousel";
import ServicesSection from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyUs/WhyUs";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Carousel />
            <ServicesSection />
            <WhyUs />
        </div>
    )
}

export default HomePage