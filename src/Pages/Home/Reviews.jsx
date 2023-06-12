import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import './Reviews.css';


const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('https://fashion-designer-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <div className=" mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">Our Students FeedBack</h3>
               
            </div>
            <div className="my-container grid md:grid-cols-2 gap-5">
                <div className="my-auto">
                    <p>Thank you for taking the time to provide your feedback. We appreciate your input and strive to continuously enhance our fashion design website based on Students suggestions.</p>
                  
                    
                </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper bg-white rounded-xl  "
            >

                {
                    reviews.map((review, index) => <SwiperSlide
                        key={index}
                    >
                        <div className="p-5 m-5 border-2 border-[#12aee0] rounded-lg">
                            <h5 className="text-xl font-semibold text-[#12aee0]">{review.name}</h5>
                            <h5 className="text-xl font-semibold text-[#12aee0]">{review.email}</h5>
                            <p className="font-medium text-base">{review.description}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    );
};

export default Reviews;