import mongoose from "mongoose";
import env from "dotenv"
env.config()
const mongoUrl=process.env.MONGO_URL
const connectDB = async () => {
    try {
        //Mern-auth project
        const conn = await mongoose.connect(mongoUrl, {})
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    } catch (error) {
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

export default connectDB