import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/pexels-photo-7147861.jpeg';
import img2 from '../../assets/240_F_399040859_KndlAuyAri1yRAfUB6FVutamH2FoZKSj.jpg';
import img3 from '../../assets/240_F_184172920_jrtYaU60QtcsKBO53wN6c0upSCYKz4EY.jpg';
import img4 from '../../assets/trendy-color_1098-13973 (1).avif';
import img5 from '../../assets/240_F_192862416_au7gPTsrnjTdL7rgJnrq0jrjhHTK9NwZ.jpg';


const Banner = () => {
    return (
        <Carousel className='text-center'>
            <div>
                <img src={img1} />

            </div>
            <div>
                <img src={img2} />

            </div>
            <div>
                <img src={img3} />

            </div>
            <div>
                <img src={img4} />

            </div>
            <div>
                <img src={img5} />

            </div>
           
        </Carousel>
    );
};

export default Banner;