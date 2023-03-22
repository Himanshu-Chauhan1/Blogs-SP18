import { User } from '../models/index.js'


//========================================POST /register==========================================================//

const create = async function (req, res) {
    try {

        const userCreated = await User.create(req.body)

        res.status(201).send({ status: 1009, message: "User has been created successfully", data: userCreated })

    } catch (err) {
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
}


export { create }