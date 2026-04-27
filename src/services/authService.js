import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";

export async function signUpUser(name, email, password) {
    const existingUser = await User.findOne({email})

    if (existingUser) {
        const err = Error("User already exists")
        err.statusCode = 400
        throw err
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    return user
}

export async function loginUser(email, password) {
    const user = await User.findOne({email});

    if (!user) {
        const err = Error("User not found")
        err.statusCode = 401
        throw err
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        const err = Error("Incorrect password")
        err.statusCode = 401
        throw err
    }

    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    return token
}