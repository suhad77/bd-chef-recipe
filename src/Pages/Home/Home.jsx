import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import { Col, Container, Row } from 'react-bootstrap';
import FoodCard from './FoodCard/FoodCard';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    const [categories, setCategories] = useState([])
    const [food, setFood] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFood(data))
            .catch(error => {
                console.error(error);
            })
    })
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.error(error);
            })
    })
    return (
        <div>
            <Banner />
            <div className='my-5'>
                <Container>

                    <div className="mt-5">
                        <div className="w-25">
                            <div className="border border-danger border-3 w-50" ></div>
                            <h2 className='py-4'>Chef</h2>
                        </div>
                        <Row lg={3} md={2} sm={1} >
                            {
                                categories.map(categories => <Cards categories={categories} key={categories._id}></Cards>)
                            }
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <div className="w-25">
                            <div className="border border-danger border-3 w-50" ></div>
                            <h2 className='py-4'>Favarite Food</h2>
                        </div>
                        <Row lg={3} md={2} sm={1}>
                            {
                                food.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                            }
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="mb-5">
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;