import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestMethod } from "../RequestMethod";
import { toast } from "react-toastify";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [err, setErr] = useState("")
    const navigate = useNavigate()


    const signIn = async (inputs) => {
        requestMethod("/auth/login", "post", inputs).then((res) => {
            if (res) {
                navigate("/")
                toast.success("SignIn Sucess")
                setCurrentUser(res)
            }
        }).catch((error) => {
            setErr(error.response?.data)
        })
    };
    const signUp = async (inputs) => {
        requestMethod("/auth", "post", inputs).then((res) => {
            if (res) {
                navigate(`/welcome/${currentUser._id}`)
                toast.success("SignUp Sucess")
                setCurrentUser(res)
            }
        }).catch((err) => {
            setErr(err.response.data)
        })
    };

    const logout = async () => {
        localStorage.clear()
        setCurrentUser("")
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, err, signIn, signUp, logout, }}>
            {children}
        </AuthContext.Provider>
    );
};