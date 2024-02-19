import express from 'express'
import env from 'dotenv'
env.config()
const app = express()
const PORT=process.env.PORT
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})