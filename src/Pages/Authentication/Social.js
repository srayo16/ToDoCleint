import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinners from '../Spinner/Spinners';
import auth from '../../Firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errormess;
    if (error) {

        errormess = <p className='text-danger text-center fw-bolder'> Error: {error ? error?.message : 'Something is wrong!'}</p>
    }
    if (user) {
        navigate(from, { replace: true });
        toast('Signed in');
        //   navigate('/home');

    }
    if (loading) {
        return <Spinners></Spinners>;
    }
    return (
        <div className='mt-1 pb-5 container'>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='pt-3 px-3 fw-bold'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            <p className='text-center fw-bold pb-3 pt-2'>To continue, log in here.</p>
            {errormess}
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-secondary rounded-pill w-50'><span className='fs-3'><FcGoogle></FcGoogle></span> <span className='fs-5 text-muted fw-bolder ps-2'>Continue with google</span></button>
            </div>

        </div>
    );
};

export default Social;