import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
    },
    profilePic: {
        type: String,
    },
},
    { timestamps: true }
);



export default mongoose.model("user", userShema)