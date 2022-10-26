import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

import BrandCarousel from '../BrandCarousel';
import { AuthContext } from '../../userContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';


const RightNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={googleSignIn} className='mb-3' variant="outline-primary"><FcGoogle></FcGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>

            </ButtonGroup>
            <div className='mt-4'>
                <h3>Find Us On </h3>
                <ListGroup>
                    <ListGroup.Item action variant="primary" className='mb-2'><FaFacebook></FaFacebook>FaceBook</ListGroup.Item>
                    <ListGroup.Item action variant="primary" className='mb-2'><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
                    <ListGroup.Item action variant="primary" className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;