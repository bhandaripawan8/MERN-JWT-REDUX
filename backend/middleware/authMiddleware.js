
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import { runInNewContext } from 'vm';

const Protect = asyncHandler(async() =>{
    let token;
    token = req.cookies.jwt;
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next();
        } catch (error) {
            res.status(401)
            throw new Error('Not authorised, invalid token')
        }

    } else{
        res.status(401)
        throw new Error('Not Authorised, no token')
    }
})

export default {Protect};