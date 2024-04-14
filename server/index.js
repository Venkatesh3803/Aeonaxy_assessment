import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRoute from "./routes/AuthRoute.js"
import cors from 'cors'

const app = express();
const port = 5000;
dotenv.config()
app.use(express.json())
app.use(cors())


const connentDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to mongodb")
    }).catch((err) => {
        console.log(err)
    })
}


app.listen(port, () => {
    connentDb()
    console.log(`app is listening at port ${port}`)
})

// routes
app.use("/api/auth", AuthRoute)