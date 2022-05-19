import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';
import Spinners from '../Spinner/Spinners';
import Social from './Social';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const mail = useRef('');
    const pass = useRef('');
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errormess;
    if (error || error2) {

        errormess = <p className='text-danger text-center fw-bolder'> Error:  {error?.message}
            {error2?.message} </p>
    }

    if (loading || sending) {
        return <Spinners></Spinners>;
    }
    if (user) {
        toast('Logged in');
        navigate(from, { replace: true });
    }

    // log in funtion 

    const onsubLog = async event => {
        event.preventDefault();
        const email = mail.current.value;
        const password = pass.current.value;
        if (email && password) {
            await signInWithEmailAndPassword(email, password);


        }

    }

    // reset pass funtion 

    const resetPass = async () => {
        const email = mail.current.value;

        if (email && !error2) {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        }
        else {
            alert('Email field empty!');
        }


    }
    return (
        <div className='container mt-3'>
            <h1 className='text-center'>Please Log In</h1>
            <div className='handleSize mx-auto'>
                <Form onSubmit={onsubLog}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={mail} type="email" placeholder="Enter email" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={pass} type="password" style={{ height: '50px' }} placeholder="Password" required />
                    </Form.Group>
                    <Button variant="secondary" type="submit" className=' rounded-pill handleSubBtn'>
                        Log in
                    </Button>
                </Form>
                {errormess}
                <button onClick={() => resetPass()} className=' btn btn-link rounded-pill text-decoration-none  text-danger fw-bolder handleSubBtn2'><span className='text-dark'>Forgot password?</span> Reset Password</button>
                <Link to='/signup' className=' btn btn-link rounded-pill text-decoration-none handleSubBtn2 text-danger fw-bolder'>Are you new user?</Link>
                <Social></Social>

            </div>
        </div>
    );
};

export default Login;