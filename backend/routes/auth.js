import express from 'express'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import User from "../models/User.js"

const router = express.Router()

//Registeration

router.post("/register", async (request, response) => {
    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: CryptoJS.AES.encrypt(request.body.password, process.env.PASSWORD_SEC),
    })

    try{
        const savedUser = await newUser.save()
        response.status(201).json(savedUser)
    } catch (error) {
        response.status(500).json(error)
    }
})

router.post("/login", async (request, response) => {
    try{
        const user = await User.findOne({
            username: request.body.username,
        })
        !user && response.status(401).json("wrong credential")
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SEC)
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        userPassword != request.body.password && response.status(401).json("wrong credential")
        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC, 
        {
            expiresIn: "3d",
        })
        const {password, ...others} = user._doc
        response.status(200).json({...others, accessToken})
    } catch (error) {
        response.status(500).json(error)
    }
})

export default router