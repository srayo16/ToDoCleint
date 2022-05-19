import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spinners = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" />
        </div>
    );
};

export default Spinners;