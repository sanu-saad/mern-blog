import express from 'express';
import dotenv from 'dotenv';
import connDB from './DB/conn.js';
import upload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express()

//routes
import authRoutes from './routes/authRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

//middleware
app.use(express.json())
app.use(upload())
app.use('/uploads',express.static(__dirname + '/uploads'))

//DB
connDB()

//routes
app.use("/api/v1/auth",authRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log('server running')
})