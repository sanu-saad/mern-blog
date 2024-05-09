import express from 'express';
import { login, logout, register } from '../controllers/userController.js';
import { verifyJWT } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register)
router.post('/login',login)

//Secured
router.post('/logout',verifyJWT,logout)
export default router;