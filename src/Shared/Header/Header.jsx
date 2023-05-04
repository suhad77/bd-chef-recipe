import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=> console.log(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/">Kitchen Sensation </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex gap-4">
                            <Link className='text-decoration-none text-black' to='/'>Home</Link>
                            <Link className='text-decoration-none text-black' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-black' to='/login'>Login</Link>
                            <Link className='text-decoration-none text-black' to='/register'>Register</Link>

                        </Nav>
                        <Nav className='d-flex align-items-center gap-2'>
                            {
                                user && <div>
                                    {
                                        user.photoURL ?<img className='rounded-circle' style={{height: '40px'}} src={user.photoURL} alt="" />:
                                        <p><FaUserCircle className='text-black' style={{ fontSize: "40px" }}></FaUserCircle></p>
                                    }
                                </div>
                            }
                            { user ?
                                <Link><Button onClick={handleLogOut} variant="secondary">Loguot</Button></Link> :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;