import { User } from "../models/users.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const signUp = async(req, res, next) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({
    username,
    email,
    password : hashedPassword
  })

  try {
    await newUser.save()  
    return res.status(201).json({message : "user created succesfully"})  
  } catch (error) {
    next(error)
  }
}

