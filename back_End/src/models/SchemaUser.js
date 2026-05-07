import mongoose from "mongoose"
import { Schema } from "mongoose"

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    lastename: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,  
    },
    phone:{
        type: String,
        required: true

    },
    role: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    profite:{
        type: String,

    }

}, { timestamps: true })
export default mongoose.model("User", user)