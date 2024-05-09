import express from 'express';
import dotenv from 'dotenv';
import connDB from './DB/conn.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
// import {ApiError} from './middlewares/ApiError.js';

const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express()

//routes
import userRoutes from './routes/userRoutes.js'
// import postRoutes from './routes/postRoutes.js'

//middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//DB
connDB()

// app.use(ApiError)

//routes
app.use("/api/v1",userRoutes);
// app.use("/api/v1/post",postRoutes);



app.listen(PORT, ()=> {
    console.log('server running')
})