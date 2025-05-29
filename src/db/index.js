import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
const connectDB = async ()=>{
    try{
        console.log("connecting to :",`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI,{
        dbName: DB_NAME,
        
        family: 4
    })
    console.log(`\n MongoDB connected !!DB HOST: ${connectionInstance.connection.host}`);
}catch(error){
    console.log("MONGODB connection error",error);
    process.exit(1)
}
}
export default connectDB