import React from 'react';
import { FaTwitter, FaFacebookSquare, FaBasketballBall, FaInstagram, FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gray-100 w-full py-10'>
            <div className="w-[85%] m-auto flex flex-col gap-4
            " >
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-5">
                        <h1 className='text-5xl text-pink-600' style={{fontFamily: "Whisper"}}>Dribbble</h1>
                        <p className='w-52'>Dribbble is the world's leading community for the creatives to share, grow, and get hired</p>
                        <ul className='flex gap-2 items-center'>
                            <li><FaBasketballBall /></li>
                            <li><FaFacebookSquare /></li>
                            <li><FaInstagram /></li>
                            <li><FaTwitter /></li>
                            <li><FaPinterest /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className='font-semibold'>For Designers</h1>
                        <ul className='flex flex-col gap-2'>
                            {["Go Pro", "Explore design work", "Design Blog", "Overtime podcast", "Playoffs", "Weekly Warm-Up", "Refer a Friend", "Code of Conduct"].map((item) => {
                                return (
                                    <li className='text-gray-600 cursor-pointer hover:text-pink-600'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className='font-semibold'>Hire Designers</h1>
                        <ul className='flex flex-col gap-2'>
                            {["Post a job opening", "Post a freelance project", "Search for designers",].map((item) => {
                                return (
                                    <li className='text-gray-600 cursor-pointer hover:text-pink-600'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className='font-semibold'>Company</h1>
                        <ul className='flex flex-col gap-2'>
                            {["About", "Careers", "Support", "Media Kit", "Testimonials", "API", "Terms of service", "Privacy policy", "Cookie policy"].map((item) => {
                                return (
                                    <li className='text-gray-600 cursor-pointer hover:text-pink-600'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className='font-semibold'>Directories</h1>
                        <ul className='flex flex-col gap-2'>
                            {["Design Jobs", "Designers for hire", "Freelance designers for hire", "Tags", "Places"].map((item) => {
                                return (
                                    <li className='text-gray-600 cursor-pointer hover:text-pink-600'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className='font-semibold'>For Designers</h1>
                        <ul className='flex flex-col gap-2'>
                            {["Frelancing", "Design Hiring ", "Design Portfolio", "Design Educatiocreative Process", "Design Industry Trends"].map((item) => {
                                return (
                                    <li className='text-gray-600 cursor-pointer hover:text-pink-600'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                    <p>2023 Dribbble. All rights reserved</p>
                    <p className='flex items-center gap-2'><span className='font-semibold'>20,501,853</span> shots dribbbled <FaBasketballBall className='text-pink-600' /> </p>
                </div>
            </div>
        </div>
    )
}

export default Footer