import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <h2 className="text-white text-lg font-bold mb-2">About Us</h2>
                        <ul className="text-white">
                            <li>Home</li>
                            <li>Instructors</li>
                            <li>Classes</li>

                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <h2 className="text-white text-lg font-bold mb-2">Connect</h2>
                        <ul className="text-white">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <span className="footer-title">CUSTOMER</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@gmail.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © 2023 - All right reserved by StyleMakers Fashion</p>
        </footer>
    );
};

export default Footer;