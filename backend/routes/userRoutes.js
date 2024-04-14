import express from 'express'
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';
// import Protect from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile)
router.put('/profile/:id', updateUserProfile);

export default router;