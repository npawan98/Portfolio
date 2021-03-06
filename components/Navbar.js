import { useEffect, useState } from "react";
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => {
            window.removeEventListner("scroll", transitionNavbar)
        }
    }, [])
    return (

        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <a href="#"><img
                    className="nav__logo"
                    src="/assets/logo.png"
                    alt="BrandingLogo"
                /></a>

                <div className="nav__avatar">
                    <MenuIcon onClick={openNav} style={{ color: "white" }} />
                </div>
                <div></div>
            </div>

            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="#" onClick={closeNav}>Home</a>
                    <a href="#about" onClick={closeNav}>About</a>
                    <a href="#skills"onClick={closeNav}>Technical Skills</a>
                    <a href="#experience"onClick={closeNav}>Experience & Certifications</a>
                    <a href="#projects" onClick={closeNav}>Projects</a>
                    <a href="#contact" onClick={closeNav}>Contact</a>
                </div>
            </div>

        </div>
    )
    
}
function openNav(){
    document.getElementById("myNav").style. height = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.height = "0%";
}
export default Navbar

