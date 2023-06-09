import { } from 'dotenv/config'
import express from 'express'
import connectDB from './db/connectDb.js'
import { userRouter } from './routes/index.js'
const app = express()

app.use(express.json())

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//Database Connection
connectDB(DATABASE_URL)


//Load Routes
app.use("/", userRouter)


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})