import styled from "styled-components";

function Experience() {
    return (
        <Container id="experience">
            <Space></Space>
            <Header>
                <h1>Experience</h1>
            </Header>
            <BodyText>
                <div>
                    <h4>Technical Coordinator and Tech lead</h4>
                    <p>Google Developer Student Club, DSC JIIT Noida-128</p>
                </div>
                <br /><br />
                <div>
                    <h4>Web Development Training,</h4>
                    <p>Internshala</p>
                </div>
            </BodyText>
            <Certifications>
                <Header>
                    <h1>Certifications</h1>
                </Header>
                <BodyText>
                    <div>
                        <h4>Android App Development </h4>
                        <p>(WAC Delhi, DTU),</p>
                    </div>
                    <br /><br />
                    <div>
                        <h4>Introduction to Flutter using Dart</h4>
                        <p> (App Bewery)</p>
                    </div>
                    <br /><br />
                    <div>
                        <h4>Web Development training </h4>
                        <p> (internshala)</p>
                    </div>
                    <br /><br />
                    <div>
                        <h4>Mentor/Core Team</h4>
                        <p> (Progate)</p>
                    </div>
                    <br /><br />
                    <div>
                        <h4>Software Engineering Virtual Experience </h4>
                        <p> (JP
Morgan Chase & Co)</p>
                    </div>
                </BodyText>

            </Certifications>

        </Container>
    )
}

export default Experience

const Container = styled.div`
margin:20px;
color:white;

`;

const Space = styled.div`
height:15px;
`;


const BodyText = styled.div`
>div{
    margin-left:50px;
    @media only screen and (max-width: 600px) {
    margin-left:20px;
    }
  }

>p{
        
    opacity:50%;
}
`;

const Header = styled.div`
    margin-top:50px;
    margin-bottom:20px;
`;

const Certifications = styled.div``;

