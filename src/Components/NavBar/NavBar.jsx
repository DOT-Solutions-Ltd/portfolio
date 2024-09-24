import { useState } from 'react'
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import NavLogo from "../../assets/nav-logo.png";
import './NavBar.css'

const NavBar = () => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    return (
        <nav className='nav-container' >
            <Link to="/" style={{ all: "unset" }} ><img src={NavLogo} alt="nav-logo" className='nav-logo' /></Link>
            <ul className="nav-links-container">
                {
                    navLinks.map(({ pageName, path, id }) => {
                        return (
                            <Link style={{ all: "unset" }} to={path} key={id}>
                                <li className="nav-links">{pageName}</li>
                            </Link>
                        )
                    })
                }
            </ul>
            <Link to="/about#contact-us" className="nav-button">Contact Us</Link>

            {/**MOBILE NAVIGATION */}

            <button onClick={() => setIsMobileNavActive((prev) => !prev)} className='nav-mobile-menu'>
                <Icon icon="jam:menu" width={28} height={28} color='#25A0A0' />
            </button>
            {isMobileNavActive && (
                <div className='nav-mobile-side-bar'>
                    <div className="nav-mobile-side-bar-top-section">
                        <Link onClick={() => setIsMobileNavActive((prev) => !prev)} to="/" style={{ all: "unset" }} ><img src={NavLogo} alt="nav-logo" className='nav-logo' /></Link>
                        <Icon icon="fluent-mdl2:cancel" width={26} height={26} color='#25A0A0' onClick={() => setIsMobileNavActive((prev) => !prev)} />
                    </div>
                    <ul className="nav-mobile-links-cont">
                        {
                            navLinks.map(({ pageName, path, id }) => {
                                return (
                                    <Link onClick={() => setIsMobileNavActive((prev) => (!prev))} style={{ all: "unset" }} to={path} key={id}>
                                        <li className="nav-mobile-links">{pageName}</li>
                                    </Link>
                                )
                            })
                        }
                        <Link onClick={() => setIsMobileNavActive((prev) => !prev)} to="/about#contact-us" className='nav-mobile-contact-button' >Contact Us</Link>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default NavBar