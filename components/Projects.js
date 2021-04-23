import styled from "styled-components";

function Projects() {
    return (
        <Container id="projects">
            <Space></Space>
            <Header>
                <h1>Recent Projects</h1>
            </Header>
            <ProjectsList>
                <a href="https://whatsapp-nextjs-iota.vercel.app/"><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/1.png"/></a>
                <a href="https://empowerx.co.in"><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/2.png"/></a>
                <a href=""><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/3.png"/></a>
                <a href="https://socialconnect-2df6b.web.app/"><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/4.png"/></a>
                <a href="http://spotify-1c4e7.web.app/"><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/5.png"/></a>
                <a href=""><img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/6.png"/></a>

            </ProjectsList>

        </Container>
    )
}

export default Projects

const Container = styled.div`
    margin-top:"300px";
`;
const Space = styled.div`
height:15px;
`;
const Header = styled.div`
color:white;
margin-top:50px !important;
margin:20px;
`;

const ProjectsList = styled.div`
    /* margin-left:20px; */
    display:flex;
    overflow:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
    >a>img{
        cursor: pointer;
        border-radius:20px;
        height:200px;
        width:350px;
        object-fit:contain;
        margin:5px;
    }
`;
