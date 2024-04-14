import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import Navber from '../components/Navber'

const DesignerOption = () => {
    return (
        <>
            <Navber />
            <div className='w-[75%] m-auto h-screen'>
                <div className="flex flex-col gap-5 py-20 items-center">
                    <h1 className='text-4xl font-bold '>What Brings you to Dribbble</h1>
                    <p className='text-gray-600 text-lg'>Select the option that best describe you. Don't worry, you can explore other options later</p>

                    <div className="flex gap-5 items-center my-16">
                        <div className="border border-gray-300 rounded-2xl w-[280px] flex items-center justify-center flex-col p-5">
                            <img src={img3} className='w-full h-full object-cover' alt="" />
                            <h2 className='text-xl font-bold text-center leading-6'>I'm Designer looking to share my work</h2>
                            <input type="radio" name='design' className='w-5 h-5 mt-5' />
                        </div>
                        <div className="border border-gray-300 rounded-2xl w-[280px] flex items-center justify-center flex-col p-5">
                            <img src={img1} className='w-full h-full object-cover' alt="" />
                            <h2 className='text-xl font-bold text-center leading-6'>I'm looking to hire Designer</h2>
                            <input type="radio" name='design' className='w-5 h-5 mt-5' />
                        </div>
                        <div className="border border-gray-300 rounded-2xl w-[280px] flex items-center justify-center flex-col p-5">
                            <img src={img2} className='w-full h-full object-cover' alt="" />
                            <h2 className='text-xl font-bold text-center leading-6'>I'm looing for Design Inspiration</h2>
                            <input type="radio" name='design' className='w-5 h-5 mt-5' />
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link to={"/"}>
                            <button className='bg-[rgb(234,75,139)] px-8 py-2 text-white font-semibold w-fit rounded-lg' >Finish</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignerOption
