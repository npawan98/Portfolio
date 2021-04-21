import { useEffect, useState } from "react";
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const[show,handleShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
       window.addEventListener("scroll",transitionNavbar)
        return () => {
            window.removeEventListner("scroll",transitionNavbar)
        }
    }, [])
    return (

        <div className = {`nav ${show && "nav__black"}`}>
            <div className = "nav__content">
            <img
            className="nav__logo"
                src="/assets/logo.png"
                alt = "BrandingLogo"
            />

            <div className="nav__avatar">
                <MenuIcon style={{color:"white"}}/>
                </div>
            <div></div>
            </div>
            
        </div>
    )
}

export default Navbar

