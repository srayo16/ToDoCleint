import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinners from '../Spinner/Spinners';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Spinners></Spinners>
    }
    const logout = () => {
        signOut(auth);
        toast('Signed Out');
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">To-Do-APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/addtask'>Add Task</Nav.Link>
                            <Nav.Link as={Link} to='/taskmanager'>Task Manager</Nav.Link>
                            {user && <Button variant="dark" disabled>{user.displayName}</Button>}
                            {user ? <Button variant="dark" onClick={logout}>Sign Out</Button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;