import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../userContext/UserContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                setError('')
                form.reset()
                handleProfileUpdate(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    }
    const handleCheck = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>Name
                <Form.Control name='name' type="text" placeholder="Enter uour name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="photoUrl" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group onClick={handleCheck} className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"

                    label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger d-block">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;