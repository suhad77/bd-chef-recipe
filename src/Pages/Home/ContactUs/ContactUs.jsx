import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <div className="w-25">
                    <div className="border border-danger border-3 w-50" ></div>
                    <h2 className='py-4'>Contact Me</h2>
                </div>
            <div className='bg-info'>
                <Row className='p-5'>
                    <Col md={4}>
                        <h3>Hello</h3>
                    </Col>
                    <Col md={8}>
                        <Form className='w-75'>
                            <div className="d-flex gap-5">
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
                                <Form.Control as="textarea" rows={3} />
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