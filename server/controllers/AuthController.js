import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hassPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hassPass;
    const newUser = await UserModel(req.body);

    try {
        const existUserName = await UserModel.findOne({ username: newUser.username });
        if (existUserName) return res.status(401).send(". Username has Already Taken")
        const existEmail = await UserModel.findOne({ email: newUser.email });
        if (existEmail) return res.status(401).send(". Email has Already Taken")

        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }

}

export const loginUser = async (req, res) => {

    try {
        const currUser = await UserModel.findOne({ email: req.body.email })
        if (!currUser) return res.status(401).send("Invalid Credentials")
        const validPass = bcrypt.compareSync(req.body.password, currUser.password);
        if (!validPass) return res.status(401).send("Invalid Credentials")

        const token = jwt.sign({
            userId: currUser._id, email: currUser.email
        }, process.env.JWT_KEY, { expiresIn: "24h" })

        const { password, ...others } = currUser._doc;

        res.status(200).json({ ...others, token })
    } catch (error) {
        res.status(500).json(error.message)
    }

}


export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) return res.status(401).json("user does not exist");

        await UserModel.findByIdAndUpdate(user._id, req.body)
        res.status(200).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}