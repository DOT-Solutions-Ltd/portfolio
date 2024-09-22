import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import OurServices from "./Pages/OurServicesPage/OurServices";
import OurWork from "./Pages/OurWorkPage/OurWork";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="works" element={<OurWork />} />
        <Route path="services" element={<OurServices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App