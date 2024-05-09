import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userModels = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : [3,"Name must be contain at least 3 character"],
        maxLength : [32,"Name cannot exceed 32 character"],
    },
    email : {
        type : String,
        required : true,
        validate: [validator.isEmail, "Please provide a valid email!"],
    },
    password : {
        type : String,
        required : true,
        minLength : [8,"Password must be contain at least 8 character"],
        maxLength : [32,"Password cannot exceed 32 character"],
        
    },
    avatar : {
        public_id : {
            type : String
        },
        url : {
            type : String
        }
    },
    role : {
        type : String,
        required : true,
        enum : ["Reader","Author"]
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
},{timestamps : true})

userModels.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next();
})

userModels.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userModels.methods.generateAccessToken = function(){
    return  jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES})
}

const User = mongoose.model("User",userModels);
export default User