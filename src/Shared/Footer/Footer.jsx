import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TbCopyright } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark bg-opacity-25 text-center p-4'>
            <Container className='text-center'>
                <div className=" text-center">
                    <Link className='me-4 bg-secondary-subtle' style={{fontSize: '1.8rem'}}><FaFacebook></FaFacebook></Link>
                    <Link className='me-4 bg-secondary-subtle' style={{fontSize: '1.8rem'}}><FaGithub></FaGithub></Link>
                    <Link className='me-4 bg-secondary-subtle' style={{fontSize: '1.8rem'}}><FaLinkedin></FaLinkedin></Link>
                    <Link className='bg-secondary-subtle' style={{fontSize: '1.8rem'}}><FaInstagram></FaInstagram></Link>
                </div><br />
                <nav className='d-flex gap-3 mx-auto' style={{width: 'fit-content'}}>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Home</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>About</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Blog</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Services</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Team</button>
                </nav><br />
            <p><small><TbCopyright style={{fontSize: '24px'}} /> copyright by chef recipe</small></p>
            </Container>
        </div>
    );
};

export default Footer;