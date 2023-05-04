import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import Recipes from './Recipes';

const ChefDetails = () => {
    const chefdetails = useLoaderData();
    const { id, chefPicture, chefName, bio, likes, numRecipes, yearsExperience, recipes } = chefdetails;

    return (
        <div className='my-5'>
            <Container>
                <Row >
                    <Col md={12}>
                        <Card className='mx-auto' style={{ width: '100%' }}>
                            <Card.Img variant="top" style={{ height: '500px' }} src={chefPicture} />
                            <Card.Body>
                                <Card.Title>Name: {chefName}</Card.Title>
                                <Card.Text>{bio} </Card.Text>
                                <Card.Text>Number Of Recipe: {numRecipes} </Card.Text>
                                <Card.Text>Year Of Expreience: {yearsExperience} </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text><FcLike></FcLike> {likes} </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <div className='mt-3'>
                        <Row lg={2} md={2} sm={1}>
                                {
                                    recipes.map(recipes => <Recipes key={id} recipes={recipes}></Recipes>)
                                }
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;