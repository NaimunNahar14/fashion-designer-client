import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import Reviews from './Reviews';
import PopularInstructor from './PopularInstructor';
import PopularClass from './PopularClass';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Style Makers||Home</title>
            </Helmet>
           
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClass></PopularClass>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;