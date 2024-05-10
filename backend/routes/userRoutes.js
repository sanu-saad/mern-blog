import express from 'express';
import { login, logout, register,getProfile,getAuthors } from '../controllers/userController.js';
import { verifyJWT } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/authors',getAuthors)

//Secured
router.post('/logout',verifyJWT,logout)
router.get("/myProfile",verifyJWT,getProfile)

export default router;