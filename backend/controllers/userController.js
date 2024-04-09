import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// async handler will allow us to use async await not to wrap everything inside try and catch
const authUser = asyncHandler(async(req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        res.status(201).json({_id: user._id, name: user.name, email: user.email})
    } else {res.status(401);
        throw new Error('Invalid email or password')
    }
})


const registerUser = asyncHandler(async (req, res) => {
    console.log("Request body:", req.body);
    const { name, email, password } = req.body;
    console.log("Checking if user exists for email:", email);
    const userExists = await User.findOne({ email });
    if (userExists) {
        console.log("User already exists:", userExists);
        res.status(400).json({ error: 'User already exists' });
    } else {
        console.log("Creating new user:", { name, email });
        const user = await User.create({ name, email, password });
        if (user) {
            console.log("User created:", user);
            generateToken(res, user._id)
            res.status(201).json({ _id: user._id, name: user.name, email: user.email });
        } else {
            console.log("Invalid user data");
            res.status(400).json({ error: 'Invalid user data' });
        }
    }
});

const logoutUser = asyncHandler(async(req, res)=>{

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: 'User logged out successfully'});
})
const getUserProfile = asyncHandler(async(req, res)=>{

    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user)
})
const updateUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findByID(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save()
        res.status(200).json({_id: updatedUser._id, 
        name: updatedUser.name,
        email: updatedUser.email

        })
    }

    res.status(200).json({message: 'profile Updated'})
})

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile}