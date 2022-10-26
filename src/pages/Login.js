import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../userContext/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    // to display error
    const [error, setError] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Button onClick={handleLogin} variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger d-block">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;