import React, { useContext, useState } from 'react'
import signin from "../assets/signin.jpg"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'



const SignUp = () => {
    const { signUp, err } = useContext(AuthContext)
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(inputs)
    }

    

    return (
        <div className='flex w-full h-screen'>
            <div className="flex-[3.5] bg-[rgb(242,212,139)] py-20 px-10 flex gap-5 flex-col">

                <h1 className='text-4xl font-bold leading-1 text-[rgb(130,94,19)]'>Discover the world's top Designers & Creatives</h1>
                <img className='w-full h-full object-contain' src={signin} alt="" />
            </div>
            <div className="flex-[7.5] relative">
                <p className='absolute top-4 right-4 text-sm'>Already a member? <span className='text-[rgb(71,57,155)] cursor-pointer'>
                    <Link to={"/signin"}>
                        Sign In
                    </Link>
                </span> </p>
                <form action="" className='w-[50%] h-full flex flex-col gap-8 justify-center m-auto' onSubmit={handleSubmit}>
                    <h1 className='text-3xl font-bold '>Sign up to Dribbble</h1>
                    <p className='text-red-500 text-[15px] '>{err}</p>

                    <div className=" flex gap-4 w-full">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className='font-bold'>Name</label>
                            <input className='bg-[rgb(243,243,243)] rounded-md px-4 py-2 w-full focus:outline-none text-black' type="text" placeholder='Name' required name='name' onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className='font-bold'>Username</label>
                            <input className='bg-[rgb(243,243,243)] rounded-md px-4 py-2 w-full focus:outline-none text-black' type="text" placeholder='Username' required name='username' onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className='font-bold'>Email</label>
                        <input className='bg-[rgb(243,243,243)] rounded-md px-4 py-2 w-full focus:outline-none text-black' type="email" placeholder='example@gmail.com' required name='email' onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className='font-bold'>Password</label>
                        <input className='bg-[rgb(243,243,243)] rounded-md px-4 py-2 w-full focus:outline-none text-black' type="password" placeholder='6+ Characters' required name='password' minLength={6} onChange={handleChange} />
                    </div>

                    <div className="flex gap-5 ">
                        <input type="checkbox" className='h-8 w-8' />
                        <p className='text-[15px]'>Creation an account means you're okay with our <span className='text-[rgb(71,57,155)] cursor-pointer'> Terms of Service Privacy Policy,</span>  and our default <span className='text-[rgb(71,57,155)] cursor-pointer'>Notification Settings</span></p>
                    </div>

                    <button className='bg-[rgb(234,75,139)] px-8 py-2 text-white font-semibold w-fit rounded-lg' type='submit'>Create Account</button>
                    <div className="text-[12px]">
                        <p>This site protected by reCAPTCHA and the Google</p>
                        <p><span className='text-[rgb(71,57,155)] cursor-pointer'>Privacy Policy</span> and <span className='text-[rgb(71,57,155)] cursor-pointer'>Terms of Service</span> apply</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp
