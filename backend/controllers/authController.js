import User from '../models/userModels.js'
import {HttpError} from '../models/errorModel.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


//USER REGISTER - POST : api/v1/auth/register [Unprotected]
const  registerController = async(req,res,next) => {
    try {
        const {name,email,password,password2} = req.body;
        if(!name || !email || !password || !password2){
            // return res.status(400).send({
            //     success : false,
            //     msg : 'all fields are required',
               
            // })
            return next(new HttpError("All fields are required",422))
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            // return res.status(401).send({
            //     success : false,
            //     msg : 'user already exist',
               
            // })
            return next(new HttpError("user already exists"))
        }
        if(password.trim().length < 6){
            return next(new HttpError('Password should be at least 6 character'),422)
        }
        if(password != password2){
            return next(new HttpError('Password do not match'),422)
        }
        
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = new User({name,email,password:hashPassword})
        await newUser.save();
        return res.status(201).send({
            success : true,
            msg : 'new user created',
           
        })
    } catch (error) {
        console.log(error)
        // return res.status(500).send({
        //     success : false,
        //     msg : 'error in registerController',
        //     error
        // })
        return next(new HttpError("User registration failed",422))
    }
}

//USER LOGIN - POST : api/v1/auth/login [Unprotected]
const loginController = async(req,res,next) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            // return res.status(400).send({
            //     success : false,
            //     msg : 'all fields are required',
               
            // })
            return next(new HttpError("All fields are required"),422)
        }
        const validUser = await User.findOne({email})
        if(!validUser){
            // return res.status(401).send({
            //     success : false,
            //     msg : 'user not valid',
               
            // })
            return next(new HttpError("Invalid user details"),422)
        }
        const validPassword = await bcrypt.compare(password,validUser.password)
        if(!validPassword){
            // return res.status(401).send({
            //     success : false,
            //     msg : 'unauthorized',
               
            // })
            return next(new HttpError("Invalid user details"),422)
        }
        const token = jwt.sign({id : validUser._id, email : validUser.email},process.env.JWT_SECRET)
         res.status(201)
        // .cookie('access-token',token,{http:true})
        .json({validUser,token})
    } catch (error) {
        // return res.status(400).send({
        //     success : false,
        //     msg : 'error in loginController',
           
        // })
        return next(new HttpError("Login failed"),422)
    }
}

//USER PROFILE - GET : api/v1/auth/:id [Protected]
const getUser = async(req,res,next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).select('-password')
        if(!user){
            return next(new HttpError("User not found"),404)

        }
        res.status(200).json(user)
    } catch (error) {
        return next(new HttpError(error))
    }
}

//CHANGE USER PROFILE PICTURE - POST : api/v1/auth/change-avatar [Protected]
const changeAvatar = async(req,res,next) => {
   try {
    // res.json(req.files)
    // console.log(req.files)
    if(!req.files.avatar){
        return next(new HttpError("Please choose an image",422))
    }
    //find user from database
    const user = await User.findById(req.user.id)
    //delete all avatar if exist
    if(user.avatar){
        fs.unlink(path.join(__dirname,'..','uploads',user.avatar),(err)=>{
            if(err){
                return next(new HttpError(err))
            }
        })        
    }
    const {avatar} = req.files
    //check file size
    if(avatar.size > 500000){
        return next(new HttpError("Profile picture to big. Should be less than 500kb"),422)
    }

    let fileName;
    fileName = avatar.name;
    let splittedFilename = fileName.split('.')
    let newFilename = splittedFilename[0] + uuidv4() + '.' + splittedFilename[splittedFilename.length - 1]
    avatar.mv(path.join(__dirname, '.', 'uploads',newFilename),async(err)=>{
        if(err){
            return next(new HttpError(err))
        }
        const updatedAvatar = await User.findByIdAndUpdate(req.user.id,{avatar:newFilename},{new:true})
        if(!updatedAvatar){
            return next(new HttpError("Avatar couldn't be changed", 422))
        }
        res.status(200).json(updatedAvatar)
    })
        
   } catch (error) {
    return next(new HttpError(error))
   }
}

//EDIT USER DETAILS - PATCH : api/v1/auth/edit-user [Protected]
const editUser = async(req,res) => {
    res.json('edit profile details')
}

//GET AUTHORS - GET : api/v1/auth/authors [Unprotected]
const getAuthors = async(req,res,next) => {
    try {
        const authors = await User.find().select('-password')
        if(!authors){
            return next(new HttpError("Authors not found"))
        }
        res.json(authors)
       
    } catch (error) {
        return next(new HttpError(error))
    }
}
export {registerController,loginController,getUser,changeAvatar,editUser,getAuthors}