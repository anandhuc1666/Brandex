import mongoose from "mongoose";
import { Schema } from "mongoose";

const project = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    customer_name: {
        type: String
    },
   user_name:{
        type: String,
   },
   customer_phone:{
        type: String,
   },
   product:{
        type: String,
   },
   customer_place:{
        type: String,
   },
   day:{
        type: String,
   },
   price:{
        type: String,
   },
   sticky:{
    type: String,
   },
   position:{
     type:String,
     default: "pending"
   }
})

export default mongoose.model("Project", project)