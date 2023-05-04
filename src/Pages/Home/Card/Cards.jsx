import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({categories}) => {
    // const {name,}=categories;
    // console.log(categories);
    return (

        <Card>
            <Card.Img style={{height: '278px'}} variant="top" src={categories.chefPicture} />
            <Card.Body className=''>
                <Card.Title>Name: {categories.chefName}</Card.Title>
                <Card.Text>Years of experience: {categories.yearsExperience} </Card.Text>
                <Card.Text>Numbers of recipes: {categories.numRecipes} </Card.Text>
                <Card.Text>Likes: {categories.likes} </Card.Text>
                <Link variant="primary" categories={categories}>View Recipes</Link>
            </Card.Body>
        </Card>
    );
};

export default Cards;