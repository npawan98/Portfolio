import styled from "styled-components";

function Projects() {
    return (
        <Container id="projects">
            <Header>
                <h1>Top Projects</h1>
            </Header>
            <ProjectsList>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/1.png"/>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/2.png"/>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/3.png"/>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/4.png"/>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/5.png"/>
                <img src="https://github.com/npawan98/Portfolio/raw/master/public/assets/Projects/6.png"/>
            </ProjectsList>

        </Container>
    )
}

export default Projects

const Container = styled.div`
    margin-top:"300px";
`;

const Header = styled.div`
color:white;
margin-top:50px !important;
margin:20px;
`;

const ProjectsList = styled.div`
    margin-left:20px;
    display:flex;
    overflow:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
    >img{
        border-radius:20px;
        height:200px;
        width:350px;
        object-fit:contain;
        margin:5px;
    }
`;
