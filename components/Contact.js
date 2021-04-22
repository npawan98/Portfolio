import { useState } from "react";
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import { Facebook, GitHub, Twitter, YouTube } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = () => {
        window.open(
            `mailto:${contactEmail}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                email
            )}): ${encodeURIComponent(message)}`
        );
    };
    return (
        <Container id="contact">
            <Header>
                <h1>Get In Touch ! </h1>
            </Header>
            <FormContainer>
                <form onSubmit={submitForm}>
                    
                        <TextInput type="text"
                            defaultValue=""
                            placeholder="Name"
                            value={name}
                            size="35"
                            id="contactName"
                            name="contactName"
                            onChange={(e) => setName(e.target.value)} />
                        <br/>
                    
                        <TextInput type="text"
                            defaultValue=""
                            placeholder="Email"
                            value={email}
                            size="35"
                            id="contactEmail"
                            name="contactEmail"
                            onChange={(e) => setEmail(e.target.value)} />
                        <br/>
                        <TextInput type="text"
                            defaultValue=""
                            placeholder="Subject"
                            value={subject}
                            size="35"
                            id="contactSubject"
                            name="contactSubject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    <br/>
                        <TextArea cols="50"
                            placeholder="Message..."
                            rows="15"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="contactMessage"
                            name="contactMessage" />
                    <br/>
                    <SubmitButton onClick={submitForm} type="submit" className="submit">
                        <SendIcon/>
                        <h4>Submit</h4>
                    </SubmitButton>
                    
                    <SocialHandels>
                        <a href="https://www.instagram.com/npawan98"><InstagramIcon/></a>
                        <a href="https://www.facebook.com/npawan98"><Facebook/></a>
                        <a href="https://www.youtube.com/technicallycharge"><YouTube/></a>
                        <a href="https://www.twitter.com/technicalcharge"><Twitter/></a>
                        <a href="https://www.github.com/npawan98"><GitHub/></a>
                    </SocialHandels>

                </form>

            </FormContainer>

        </Container>
    )
}

export default Contact

const Container = styled.div`
display:grid;
place-items:center;
margin-left:50px;
margin-right:50px !important;
`;

const Header = styled.div`
margin-top:50px;
margin-bottom:20px;
color:white;
`;

const FormContainer = styled.div`
margin-bottom:15px;
`;

const TextInput = styled.input`
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    `;

const TextArea = styled.textarea`
    margin-left:20px;
    margin-right:20px;
    margin-bottom:10px;

    width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
`;

const SubmitButton = styled.div`
    cursor: pointer;
    margin-top:6px;
    color: #fff;
    display: flex;
    align-items:center;
    padding:15px;
    background: #444;
    width:120px;
    border-radius:5px;
    >h4{
        padding-left:5px;
        /* align-items:center; */
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
`
