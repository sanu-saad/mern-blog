import { ApiError } from "./ApiError.js";
import { asyncHandler } from "./asyncHandler.js";
import jwt from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async(req,res,next) => {
   try {
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
 
     if(!token){
         throw new ApiError(401,"Unauthorized request")
     }
     const user = jwt.verify(token,process.env.JWT_SECRET )
 
     if(!user){
         throw new ApiError(401,"Invalid Access Token")
 
     }
     req.user = user;
     next()
   } catch (error) {
        throw new ApiError(401,"Invalid access token")
   }
})