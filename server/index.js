import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8000
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`MongoDB connected`))
  .catch((error) => console.log(error));



app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
