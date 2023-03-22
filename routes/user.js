import express from "express";
const userRouter = express.Router();
import { create } from "../controllers/user.js"
import { createUser } from '../validators/user.js'

userRouter.post('/users', [createUser], create);

export default userRouter