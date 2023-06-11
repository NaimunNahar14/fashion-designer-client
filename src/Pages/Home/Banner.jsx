
import img1 from '../../assets/pexels-photo-7147861.jpeg';
import img2 from '../../assets/240_F_399040859_KndlAuyAri1yRAfUB6FVutamH2FoZKSj.jpg';
import img3 from '../../assets/240_F_184172920_jrtYaU60QtcsKBO53wN6c0upSCYKz4EY.jpg';
import img4 from '../../assets/trendy-color_1098-13973 (1).avif';
import img5 from '../../assets/240_F_192862416_au7gPTsrnjTdL7rgJnrq0jrjhHTK9NwZ.jpg';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Banner.css';




const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper mt-2 mb-2"
            >
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img1} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Fashion Design
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Fashion design is an exciting and dynamic field that combines creativity, craftsmanship, and a deep understanding of trends and aesthetics. It involves the creation of original clothing, accessories, and footwear designs that reflect individual style and capture the spirit of the times.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative'>
                        <img src={img2} alt="" />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Fashion Design School
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Fashion designers play a crucial role in shaping the way we dress and express ourselves. They draw inspiration from various sources, such as art, culture, history, nature, and personal experiences, to conceptualize and develop their unique design ideas.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative'>
                        <img src={img3} alt="" />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Fashion Design School
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Fashion design encompasses various specialties, including womenswear, menswear, children's clothing, haute couture, sportswear, accessories, and more. Each specialization requires a unique skill set and a keen understanding of the target audience's preferences and needs.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img4} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Fashion Design School
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Fashion design offers a myriad of career opportunities, ranging from working for established fashion houses and luxury brands to launching independent labels or freelancing. It is a field that thrives on innovation, self-expression, and the ability to create designs that resonate with people on a personal and emotional level.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img5} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Fashion Design School
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Fashion design offers a myriad of career opportunities, ranging from working for established fashion houses and luxury brands to launching independent labels or freelancing. It is a field that thrives on innovation, self-expression, and the ability to create designs that resonate with people on a personal and emotional level.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;