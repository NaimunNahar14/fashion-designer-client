import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import Reviews from './Reviews';
import PopularInstructor from './PopularInstructor';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Style Makers||Home</title>
            </Helmet>
           
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;