import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app = express();
app.use(express.json())

dotenv.config({
  path : ".env"
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`MongoDB connected`))
  .catch((error) => console.log(error));

//Routes
app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(process.env.PORT, () => console.log(`Server started at PORT : ${process.env.PORT}`));
