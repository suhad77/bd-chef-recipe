import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { MdLocationPin } from "react-icons/md";
import { HiMail, HiPhone } from "react-icons/hi";

const ContactUs = () => {
    return (
        <Container>
            <div className="w-25">
                    <div className="border border-danger border-3 w-50" ></div>
                    <h2 className='py-4'>Contact Me</h2>
                </div>
            <div className='bg-info'>
                <Row className='p-5'>
                    <Col  className='d-flex flex-column justify-content-center' md={4}>
                        <div>
                        <h4><MdLocationPin className='me-2 ' style={{fontSize: '25px'}}></MdLocationPin> Chiang Mai in Thailand</h4>
                        <p><HiMail className='me-2 ' style={{fontSize: '25px'}}></HiMail> contact@email.com</p>
                        <p><HiPhone className='me-2 ' style={{fontSize: '25px'}}></HiPhone> +00 123 4567</p>
                        
                        </div>
                    </Col>
                    <Col md={8} className=' my-4'>
                        <Form className='w-md-75'>
                            <div className="d-md-flex gap-5">
                                <Form.Group className="mb-3" controlId="Please Enter Your Name">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control className='w-75' as="textarea" rows={3} />
                            </Form.Group>
                            <Button className='px-3' variant="primary">Send</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ContactUs;