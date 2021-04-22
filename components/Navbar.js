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
                <img
                    className="nav__logo"
                    src="/assets/logo.png"
                    alt="BrandingLogo"
                />

                <div className="nav__avatar">
                    <MenuIcon onClick={openNav} style={{ color: "white" }} />
                </div>
                <div></div>
            </div>

            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="#about">About</a>
                    <a href="#skills">Technical Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#">Contact</a>
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

