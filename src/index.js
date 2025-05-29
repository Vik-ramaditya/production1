import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
import {app} from "./app.js"
dotenv.config({
    path: '.env'
})
connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("errror",error);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log("Mongodb connection failed !!!",error);
})

// import express from "express";
// const app = exp
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("errror",(error)=>{
//         console.log("ERRR: ",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//       })
//     }
//     catch(error){
//         console.log("ERROR: ",error)
//         throw err
//     }
// })
