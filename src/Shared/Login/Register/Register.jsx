import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser, profileUpdateData } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setError('')
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        form.reset();
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                profileUpdateData(createUser,name,photo)
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div style={{ background: '#dddddd' }}>
            <div className="align-items-center d-flex w-full" style={{ height: "80vh" }}>
                <Form onSubmit={handleRegister} className='border p-4 bg-white shadow-lg rounded w-lg-25 mx-auto'>
                    <h2>Please Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter email" required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter email" required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <p className='text-error'>{error}</p>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Register;