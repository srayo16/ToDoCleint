import React from 'react';
import banner from '../../Images/banner.jpg';

const Home = () => {
    return (
        <div className='container' style={{ height: '1200px' }}>
            <div>
                <img className='img-fluid' src={banner} alt="banner" />
            </div>
            <h3 className='text-danger text-center'>Welcome To TO-DO-App</h3>
        </div>
    );
};

export default Home;