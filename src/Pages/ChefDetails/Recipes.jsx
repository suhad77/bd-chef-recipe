import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Recipes = ({recipes}) => {
    const {recipeName,rating,cookingMethod,ingredients} = recipes;
    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>Recipe Name: {recipeName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
                    <Card.Text>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                        <li>{ingredients[5]}</li>
                    </Card.Text>
                    <Card.Subtitle>Cooking Method</Card.Subtitle>
                    <Card.Text>{cookingMethod}</Card.Text>
                    <Card.Text>Rating: {rating}</Card.Text>
                    <Button href="#">Favorite</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipes;