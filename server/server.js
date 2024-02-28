import express from 'express'
import env from 'dotenv'
import multer from 'multer'
// import connectDB from './Dbconnection.js'
import userRoutes from './Routes/user.route.js'
import authRoutes from './Routes/auth.route.js'
import bodyParser from 'body-parser';

const app = express()
app.use(express.json())
app.use(bodyParser.json())
env.config()
const PORT = process.env.PORT
const url = process.env.MONGO_URL

app.use('/api/user', userRoutes)
app.use('/api', authRoutes)

//DB connection
// connectDB()
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server listening on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error(`Failed to connect to MongoDB: ${error}`);
//         process.exit(1); // Exit process with failure
//     });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


// unknown router handler
app.use((req, res, next) => {
    const err = { message: "Custom Internal Server Error, Route doesn't exist", statusCode: 500 }
    next(err)
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    const msg = err.message || 'Internal Server Error'
    const statusCode = err.statusCode || 500
    return res.status(305).json({
        success: false,
        message: msg,
        statusCode: statusCode
    })
})