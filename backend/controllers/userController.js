import asyncHandler from 'express-async-handler'

// @desc auth user/set token
// route post /api/users/auth
// @access public

// async handler will allow us to use async await not to wrap everything inside try and catch
const authUser = asyncHandler(async(req, res) =>{
    res.status(200).json({
        message: 'Auth User'
    })
})

export {authUser}