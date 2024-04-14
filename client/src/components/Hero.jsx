import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
const Hero = () => {
    return (
        <div className='w-[50%] m-auto py-16 gap-5 flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>Please verify your email...</h1>
            <MdMarkEmailRead className='text-9xl text-gray-500'/>
            <p className='text-xl text-gray-600'>Please verify ypur email address. We've sent a confirmation email to</p>

            <h3 className='text-xl font-semibold'>Account@refero.design</h3>
            <p className='text-xl text-gray-600'>Click the congfirmation link in the email to begin using Dribbble</p>
            <p className='text-xl text-gray-600 text-center'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter, if you still don't see it, you can <span className='text-pink-600 cursor-pointer'>resend the confirmation email</span></p>
            <p className='text-xl text-gray-600'>Worng email address? <span className='text-pink-600 cursor-pointer'>Change it</span></p>
        </div>
    )
}

export default Hero