import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);

    console.log("mongo_db connected💀");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};
