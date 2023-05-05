import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';

const Cards = ({ categories }) => {
    return (

        <Card>
            <Card.Img style={{ height: '278px' }} variant="top" src={categories.chefPicture} />
            <Card.Body className=''>
                <Card.Title>Name: {categories.chefName}</Card.Title>
                <Card.Text>Years of experience: {categories.yearsExperience} </Card.Text>
                <Card.Text>Numbers of recipes: {categories.numRecipes} </Card.Text>
                <div className="d-flex justify-content-between">
                    <Card.Text><FcLike></FcLike> {categories.likes} </Card.Text>
                    <Link to={`/chefdetails/${categories._id}`} variant="primary" categories={categories}>View Recipes</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Cards;