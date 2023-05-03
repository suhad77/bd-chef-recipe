import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { CgGoogle } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Login = () => {

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const googleUser = result.user;
            console.log(googleUser)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result=>{
            const githubUser = result.user;
            console.log(githubUser)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div style={{ background: '#dddddd' }}>
            <div className="align-items-center d-flex w-full" style={{ height: "80vh" }}>
                <Form onSubmit={handleLogin} className='border p-4 bg-white w-lg-25 mx-auto shadow-lg rounded'>
                    <h2>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <div className="d-flex gap-3 mt-4">
                        <button onClick={handleGoogleSignIn} className='border'><CgGoogle style={{ fontSize: '2.2rem' }}></CgGoogle></button>
                        <button onClick={handleGithubSignIn} className='border'><FaGithub style={{ fontSize: '2.2rem' }}></FaGithub></button>
                    </div>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Login;