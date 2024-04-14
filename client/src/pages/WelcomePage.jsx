import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import { requestMethod } from '../RequestMethod';
import { toast } from 'react-toastify';
import cam from "../assets/cam.jpg"



const WelcomePage = () => {

    const [image, setImage] = useState("");
    const [user, setUser] = useState("")
    const [location, setLocation] = useState("")
    const imageRef = useRef();
    const { id } = useParams()
    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'crowdFunding');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }
    const handleUpdate = async () => {
        requestMethod(`/auth/${id}`, "patch", { profilePic: user.profilePic ? user.profilePic : image, location }).then((res) => {
            if (res) {
                toast.success("Updated")
            }
        }).catch((err) => {
            alert(err.response.data)
        })
    }
    useEffect(() => {
        requestMethod(`/auth/${id}`, "get").then((res) => {
            setUser(res)
        })
    }, [id])


    return (
        <div className='w-[50%] m-auto h-screen'>
            <div className="flex flex-col gap-8 py-20">
                <h1 className='text-4xl font-bold '>Welcome! Let's create your profile</h1>
                <p className='text-gray-600 text-lg'>lets others get to know you better! You can do these later</p>
                <div className="flex flex-col gap-8">
                    <h2 className='text-2xl font-bold'>Add an Avathar</h2>
                    <div className="flex gap-10">
                        <div className="border border-dashed border-gray-500 w-44 h-44 rounded-full flex items-center justify-center overflow-hidden">
                            {user.profilePic || image ?
                                <img src={image ? image : user.profilePic} alt="" className='w-full h-full object-cover' />
                                :
                                <img src={cam} alt='camera' className='w-8 h-8 object-cover' />
                            }
                        </div>
                        <div className="flex gap-3 flex-col">
                            <button className='border border-gray-400 px-4 py-1 rounded-md w-fit' onClick={() => imageRef.current.click()}>Choose Image</button>
                            <input type="file" name="" hidden ref={imageRef} onChange={handleUploadImage} />
                            <p className='text-gray-500 '>Or Choose one of your defaults</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className='text-2xl font-bold'>Add Location</h2>
                    <input type="text" placeholder='Enter a Location' className='border-b border-gray-500 w-full pb-3 text-lg font-semibold focus:outline-none' value={user.location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="flex gap-5 items-center">
                    <button className={location.length <= 3 ? "disable" : 'bg-[rgb(234,75,139)] px-8 py-2 text-white font-semibold w-fit rounded-lg'} onClick={handleUpdate}>Save Changes</button>
                    <Link to={"/designoption"}>
                        <button className='border border-gray-400 px-8 py-2 rounded-lg w-fit'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage
