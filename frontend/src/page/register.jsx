import { Container } from "react-bootstrap";

const register = () => {
    return (
    <Container>
        <div>
        <h1>sign up MeetUs</h1>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        </div>
    </Container>
    );
};

export default register;