import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Cards from './Card/Cards';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    const [categories, setCategories] = useState([])

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
                    <Row lg={3} md={2} sm={1} >
                        {
                            categories.map(categories => <Cards categories={categories} key={categories._id}></Cards>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;