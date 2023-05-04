import React from 'react';
import banner from "../../../assets/pexels-tirachard-kumtanom-887827.jpg"
import { Button, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Container className='d-md-flex align-items-center'>
            <div className="w-md-50 w-100">
                    <h1 className='mb-3'>Fun and Easy <br /> to become Master Cook</h1>
                    <p>Let's join us to become a cooking <br /> expert in every kind of cuisine with a  fun way to learn</p>
                    <Button>Lern More</Button>
            </div>
            <div className="w-md-50 w-100">
                <img className='w-100' src={banner} alt="" />
            </div>
        </Container>
        </>
    );
};

export default Banner;