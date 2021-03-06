import styled from "styled-components"
import GetAppIcon from '@material-ui/icons/GetApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Facebook, GitHub, Twitter, YouTube } from "@material-ui/icons";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function AboutMe() {
    useEffect(()=>{
        Aos.init({duration:1000});
      },[]);

    const Link =(e)=>{
        console.log("clicked")
        window.open("https://drive.google.com/file/d/1mS6sCZCKy2zORD3WRjDF8yVQqeu1EHjD/view")
    }
    return (
        <section id="about">
            <About>
                <Left data-aos="fade-right">
                     <ProfilePic src="https://github.com/npawan98/Portfolio/raw/master/public/assets/profile.jpeg"/>
                </Left>
                <Right data-aos="fade-left">
                    <AboutText>
                    <h2>About Me</h2> <br/>
                        <p> Hi there !, I am Pawan Kumar, a Computer Science student and a tech enthusiastic, as a full stack developer I’ve worked with many startups and also been a technical coordinator and a tech lead at google developers student club (DSC JIIT Noida-128),I have contributed to many projects based on machine learning, REACT, Angular, MongoDB, Firebase Etc.</p> <br/><br/>
                    <h2>Contact Details</h2><br/>
                    <p>Phone Number: +91-9599892474</p>
                    <p>Email: npawan98@gmail.com</p>

                    <SocialHandels>
                        <a href="https://www.instagram.com/npawan98"><InstagramIcon/></a>
                        <a href="https://www.facebook.com/npawan98"><Facebook/></a>
                        <a href="https://www.youtube.com/technicallycharge"><YouTube/></a>
                        <a href="https://www.twitter.com/technicalcharge"><Twitter/></a>
                        <a href="https://www.github.com/npawan98"><GitHub/></a>
                    </SocialHandels>
                    </AboutText>

                    
                   
                    <DownloadBtn onClick={Link}>
                        <GetAppIcon/>
                        <h4>Download Resume</h4> 
                    </DownloadBtn>
    
                </Right>
                    
            </About>
        </section>
    )
}

export default AboutMe

const About = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    padding:35px;
`;

const AboutText = styled.div`
    color:white;
    width:350px;
    margin-top:10px;
    word-spacing:5px;
    >p{
        opacity:50%;
    }

    overflow:hidden;
`;

const ProfilePic = styled.img`
    height:350px;
    width:350px;
    object-fit:contain;
`;

const Left = styled.div`
`;

const Right = styled.div`
    display:grid;
    place-items:center;
    text-align:color-interpolation-filters;
    >p{
        padding-left:50px;
        text-align:center;
    }
    margin-left:10px;
`;

const DownloadBtn = styled.div`
    cursor: pointer;
    margin-top:6px;
    color: #fff;
    display: flex;
    align-items:center;
    padding:15px;
    background: #444;
    width:200px;
    border-radius:5px;
    >h4{
        padding-left:5px;
    }
    :hover{
        background: #fff;
        color: #2B2B2B;
    
    }
`;

const SocialHandels = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    color: white;
    width:200px;
    display:flex;
    justify-content:space-between ;
`;
