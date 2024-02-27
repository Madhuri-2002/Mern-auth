import express from 'express'
import mongoose from "mongoose";
import env from 'dotenv'
import multer from 'multer'
import connectDB from './Dbconnection.js'
const app = express()
env.config()
const PORT = process.env.PORT
const url = process.env.MONGO_URL

//Image Handling
const fileImages = multer.diskStorage({
    //cb- callback
    destination: function (req, file, cb){
    cb(null,'./Images')
},
    filename: function (req, file, cb) {
       cb(null,file.originalname)
   }
})

const uploadImage = multer({ storage: fileImages })
//uploadImage.single('file') that file will be the key in the body
app.post("/single", uploadImage.single('file'), (req, res) => {
    console.log(req.file);
    res.send("file uploaded sucesfully");
})
app.post("/multiple", uploadImage.array('images', 3), (req, res) => {
    console.log(req.files);
    res.send("multiples files received")
})

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Failed to connect to MongoDB: ${error}`);
        process.exit(1); // Exit process with failure
    });
