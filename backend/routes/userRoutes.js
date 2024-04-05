import express from 'express'
import { authUser, getUserProfile, logoutUser, registerUser } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js'

const router = express.Router();


// routes that is being created
// post /api/users - registering the user
// post /api/users/auth - authenticate a user and get token
// post /api/users/logout - logout user and clear cookie
// get /api/users/profile - get user profile
// put /api/users/profile - update profile

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, getUserProfile);


export default router;