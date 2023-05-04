import React from 'react';
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefdetails = useLoaderData();
    const { _id, chefPicture, chefName, bio, numRecipes, yearsExperience } = chefdetails;
    console.log(chefdetails);
    return (
        <div>
            <h2>This is Chef Details Page</h2>
            <Container>
                <Card className='mx-auto' style={{ width: '40rem' }}>
                    <Card.Img variant="top" style={{ height: '500px' }} src={chefPicture} />
                    <Card.Body>
                        <Card.Title>Name: {chefName}</Card.Title>
                        <Card.Text>{bio} </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefDetails;