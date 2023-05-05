import React from 'react';
import { Card } from 'react-bootstrap';
import { FcLike } from 'react-icons/fc';


const FoodCard = ({food}) => {
    const { Likes, balance, company, name, picture } = food;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Img variant="top" src={picture} style={{height: '417px'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{company} </Card.Text>
                    <Card.Text>{balance} </Card.Text>
                    <Card.Text><FcLike className='me-2'></FcLike>  {Likes} </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodCard;