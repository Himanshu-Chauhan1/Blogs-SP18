import express from "express";
const userRouter = express.Router();
import { login } from "../controllers/user.js"
import { userLogin } from '../validators/user.js'

userRouter.post('/users/login', [userLogin], login);

export default userRouter