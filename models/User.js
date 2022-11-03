const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name Must Required"]
    },
    username: {
        type: String,
        unique:true,
        required: [true, "User Name Must Required"]
    },
    email: {
        type: String,
        required: [true, "User Email Address Must Required"]
    },
    phone: {
        type: String,
        required: [true, "User Phone Number Must Required"]
    },
    password: {
        type: String,
        required: [true, "User Password Must Required"]
    },
    addressline1: {
        type: String,
        default:""
    },
    addressline2: {
        type: String,
        default:""
    },
    addressline3: {
        type: String,
        default:""
    },
    pin: {
        type: String,
        default:""
    },
    city: {
        type: String,
        default:""
    },
    state: {
        type: String,
        default:""
    },
    pic: {
        type: String,
        default:""
    },
    role: {
        type: String,
        default:"User"
    },
    tokens:[],
    otp:{
        type:Number,
        default:-1
    }
})
const User = new mongoose.model("User", UserSchema)
module.exports = User