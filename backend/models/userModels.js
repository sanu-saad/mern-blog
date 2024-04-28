import mongoose from "mongoose"

const userModels = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String
    },
    posts : {
        type : Number,
        default : 0
    }
},{timestamps : true})

const User = mongoose.model("User",userModels);
export default User