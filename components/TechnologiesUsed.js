import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
function TechnologiesUsed() {
    return (
        <Container id="skills">
            <Space></Space>
            <Header>
                <h1>Technical Skills</h1>
            </Header>
            <TechStack>
                <Stack>
                    <h2>React Js</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={95} bgColor={"#61DBFB"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>Node Js</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={90} bgColor={"#3C873A"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>Android</h2>
                    <div>
                        <ProgressBar  isLabelVisible={false} completed={80} bgColor={"#32DE84"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>HTML / CSS</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={100} bgColor={"#f06529"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>Javascript</h2>
                    <div>
                        <ProgressBar  isLabelVisible={false} completed={92} bgColor={"#f0db4f"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>UI / UX</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={75} bgColor={"#524582"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>React Native</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={75} bgColor={"#61DBFB"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>MongoDB</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={60} bgColor={"#ffffff"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>Firebase</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={80} bgColor={"#F5820D"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>Flutter</h2>
                    <div>
                        <ProgressBar  isLabelVisible={false} completed={65} bgColor={"#01579b"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>MAchine Learning</h2>
                    <div>
                        <ProgressBar  isLabelVisible={false} completed={60} bgColor={"#ffffff"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                <Stack>
                    <h2>C++</h2>
                    <div>
                        <ProgressBar isLabelVisible={false} completed={60} bgColor={"#ffffff"} baseBgColor={"#444"} />
                    </div>
                </Stack>
                
                
            </TechStack>
            


        </Container>
    )
}

export default TechnologiesUsed

const Container = styled.div`
    margin:15px;
`;
const Space = styled.div`
height:15px;
`;


const Header = styled.div`
    margin-top:50px;
    color:white;
`;

const TechStack = styled.div`
margin-top:30px;
margin-left:50px;
margin-right:50px;
@media only screen and (max-width: 600px) {
   margin-left:0px;
   margin-right:0px;
  }

`;

const Stack = styled.div`
    margin-bottom:10px;
    display:flex;
    align-items:center;
    >h2{
        width:250px;
        color:white;
        padding-right:5px;
        opacity:50%;
    }
    >div{
        flex:1;
    }
`;
