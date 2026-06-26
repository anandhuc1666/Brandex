import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/server/server.js";
import authRoute from "./src/routes/RouteUser.js";
import cookieParser from "cookie-parser";
import projectRoute from "./src/routes/RouteProject.js";
import emailRoute from "./src/routes/RouterEmail.js";

dotenv.config();
await connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
// .................................import routes..............................................
app.use("/api", projectRoute);
app.use("/api", authRoute);
app.use("/api", emailRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
