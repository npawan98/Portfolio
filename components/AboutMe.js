import styled from "styled-components"
import GetAppIcon from '@material-ui/icons/GetApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Facebook, GitHub, Twitter, YouTube } from "@material-ui/icons";

function AboutMe() {
    return (
        <section id="about">
            <About>
                <Left>
                     <ProfilePic src="https://github.com/npawan98/Portfolio/raw/master/public/assets/profile.jpeg"/>
                </Left>
                <Right>
                    <AboutText>
                    <h2>About Me</h2> <br/>
                        <p>Hi there! I am Pawan Kumar !, Coming to my experiences, i haved worked for some startups and i have been a technical coordinator and a tech lead at Google Developer Student Clubs, JIIT NOIDA, A part from this i have also worked on many Projects based on web development using Techstacks like React, Angular, MongoDB etc</p> <br/><br/>
                    <h2>Contact Details</h2><br/>
                    <p>Phone Number: +91-9599892474</p>
                    <p>Email: npawan98@gmail.com</p>

                    <SocialHandels>
                        <InstagramIcon/>
                        <Facebook/>
                        <YouTube/>
                        <Twitter/>
                        <GitHub/>
                    </SocialHandels>
                    </AboutText>

                    

                    <DownloadBtn>
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
    width:400px;
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

`;

const DownloadBtn = styled.div`
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
