import mongoose from "mongoose";
import { Schema } from "mongoose";

const Email = new Schema({
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
},{ timestamps: true });
export default mongoose.model("Emailmsg",Email)
