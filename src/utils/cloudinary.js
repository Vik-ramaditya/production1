import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
  cloudinary.config({
   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
   api_key:process.env.CLOUDINARY_API_KEY,
   api_secret:process.env.CLOUDINARY_API_SECRET

  });
  const uploadOnCloudinary =  async (localfilepath)=>{
    try{
        console.log("cloudinary kjey",process.env.CLOUDINARY_API_KEY)
        console.log("chalja")
        if(!localfilepath) return null
        console.log("kab tak")
        console.log(localfilepath)
        const response = await cloudinary.uploader.upload(
            localfilepath,{
                resource_type: "auto"
            }
        )
        console.log("file is uploaded on cloudinary",response.url);

        fs.unlinkSync(localfilepath)
        return response;
    }
    catch(error){
        console.log("upload failed:",error)
        console.log("madharchod")
        fs.unlinkSync(localfilepath)
        return null
    }
  }
  export {uploadOnCloudinary}