import React, { useContext, useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { AuthContext } from '../context/AuthContext';
import { requestMethod } from '../RequestMethod';
import { Link } from 'react-router-dom';
const Navber = () => {

    const { currentUser } = useContext(AuthContext);
    const [user, setUser] = useState("")
    useEffect(() => {
        requestMethod(`/auth/${currentUser._id}`, "get").then((res) => {
            setUser(res)
        })
    }, [])
    return (
        <div className='w-full h-[8vh] flex items-center justify-between py-1 px-8 border-b border-gray-200 sticky top-0 left-0 bg-white '>
            <div className="">
                <ul className='flex gap-10'>
                    <li style={{ fontFamily: "Whisper" }} className='text-3xl font-semibold text-pink-600'>Dribbble</li>
                    {["Home", "Find Work", "Learn Design", "Go Pro", "Hire Designers"].map((item) => {
                        return (
                            <li className='cursor-pointer'>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className=" flex gap-5 items-center">
                <div className="bg-gray-200 rounded-md flex gap-2 items-center py-1 px-2">
                    <IoSearchOutline />
                    <input type="text" placeholder='Search' className='bg-transparent focus:outline-none' />
                </div>
                <IoBagRemove className='text-2xl text-gray-500' />
                <Link to={`/welcome/${currentUser._id}`}>
                    <img src={user.profilePic ? user.profilePic : "https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg"} alt="" className='w-8 h-8 object-cover rounded-full cursor-pointer' />
                </Link>
                <button className='text-xs bg-pink-400 text-white  px-4 py-2 rounded-md cursor-pointer'>Upload</button>
            </div>
        </div>
    )
}

export default Navber
