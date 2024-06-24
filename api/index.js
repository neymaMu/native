import express from 'express'   
import mongoose from 'mongoose'
import authrouter from './route/user.js'
import cors from 'cors'


const app = express()
app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb+srv://c:1@cluster0.ty3ynoy.mongodb.net/")
.then(() => console.log("db connect"))
.catch((error) => console.log(error))


app.listen(4000,()=> {
    console.log("server is runing")
}) 


app.use("/api/user",authrouter)