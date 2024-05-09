import User from '../models/userModels.js';
import  { ApiError } from '../middlewares/ApiError.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const generateToken = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        return {accessToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating token")
    }
}

const register = asyncHandler(async(req,res,next) => {
  
     const {name,email,password,role} = req.body;
     if(!name || !email || !password || !role){
       throw new ApiError(400,"All fields are required")
     }
     const user = await User.findOne({email})
     if(user){
        throw new ApiError(400,"User already exists")
     }
     await User.create({name,email,password,role});
     res.status(200).json({
         success : true,
         message : "User registered"
     })
  
})


const login = asyncHandler(async(req,res,next) => {
    const {email,password,role} = req.body;
    if(!email || !password ||!role){
        throw new ApiError(400,"All fields are required")
    }
    const user =  await User.findOne({email})
    if(!user){
        throw new ApiError(400,"Invalid user or password")
    }
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
        throw new ApiError(400,"Invalid user or password")
    }
    if(user.role !== role){
        throw new ApiError(400,"User role not match")
    }
    const {accessToken} = await generateToken(user._id)
    const loggedUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly : true,
        secure : true
    }
    return res
    .status(200).cookie("accessToken" , accessToken,options)
    .json({
        user : loggedUser,accessToken,
        message : " user loggedIn successfully"
    })
})
export {register,login}