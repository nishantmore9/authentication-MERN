import { User } from "../models/users.model.js"
import bcryptjs from "bcryptjs"

export const signUp = async(req, res) => {
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

