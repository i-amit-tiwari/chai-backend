/*
require('dotenv').config({path: './env'})

Above line will also work good , 
but using require syntax ,
code is not consistent , 
so we will try to use IMPORT SYNTAX
*/

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    
    app.on("error",(error)=> {
        console.log("ERROR: ",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})

.catch((err) => {
    console.log("MONGO db connection failed !!! ",err);
})







/* method 1 for DB CONNECTION-------> WRITING ALL THE METHODS IN INDEX.JS FILE

METHOD 2 -------> WRITING THE COONECTION METHODS IN DIFFERENT FILE AND IMPORTING FUNCTION IN INDEX.JS
import express from "express"
const app = express()
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=> {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()*/