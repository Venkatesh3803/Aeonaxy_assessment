import express from "express"
import { getUser, loginUser, register, updateUser } from "../controllers/AuthController.js";

const route = express.Router();

route.post("/", register)
route.post("/login", loginUser)
route.get("/:id", getUser)
route.patch("/:id", updateUser)

export default route


