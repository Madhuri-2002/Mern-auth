import userModel from "../Models/userModel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/errorHandler.js"
export const signup = async (req, res, next) => {
    //order isn't mandatory

    console.log(req.body);
    const { email, password, username } = req.body
    //hashsync method is asynchronous we can use hash for synchronous put 'await', same with compare, compareSync
    const hashPassword = bcryptjs.hashSync(password, 10)
    console.log(await bcryptjs.compare(password, hashPassword));
    const user = await new userModel({ username, email, password: hashPassword })
    try {
        await user.save()
        res.status(201).json({"success":true, "message": "User created successfully" })
    }
    catch (err) {
        // res.status(500).json({ "error": `Error in creating user ${err}` })
        next(errorHandler(500, "something went wrong while creating user"))
    }
}