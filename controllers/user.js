import { User } from '../models/index.js'
import signAccessToken from "../helpers/jwt.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
const nodeKey = process.env.NODE_KEY


//========================================POST /login==========================================================

let login = async (req, res) => {
    try {

        let data = req.body

        let { email, password } = data

        const user1 = await User.findOne({ email: email });
        if (!user1) {
            return res.status(422).send({ status: 1003, message: "Invalid email credentials" });
        }
        let checkPassword = await bcrypt.compare(password + nodeKey, user1.password)
        if (!checkPassword) return res.status(422).send({ status: 1003, msg: " Invalid password credentials" })

        const token = await signAccessToken(user1._id.toString(), user1.userRole, user1.email);
        console.log("hello-1")

        const userData = {
            token: token,
            role: user1.userRole,
            email: user1.email,
        }
        return res.status(200).send({ status: 1010, message: "User has been successfully logged in", data: userData })

    } catch (error) {
        console.log(error.message);
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
}



export { login }