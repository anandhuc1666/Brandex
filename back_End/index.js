import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./src/server/server.js";
import authRoute from "./src/routes/RouteUser.js";
import projectRoute from "./src/routes/RouteProject.js";
import emailRoute from "./src/routes/RouterEmail.js";

dotenv.config();

const app = express();

// Connect MongoDB
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", projectRoute);
app.use("/api", authRoute);
app.use("/api", emailRoute);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Brandax Backend Running 🚀",
  });
});

// Run locally only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;