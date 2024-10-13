import { useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>
        <Container>
            <div>
            <h1>Sign in up MeetUs</h1>
            <h6>Username</h6>
            <Form.Group controlId="formUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </Form.Group>
            <h6>Email</h6>
            <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </Form.Group>
            <h6>Password</h6>
            <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type="password"
                placeholder="Crea una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </Form.Group>
            </div>
        </Container>
    </>
    );

};

export default Register;
