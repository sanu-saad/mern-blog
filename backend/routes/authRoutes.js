import express from 'express';
import { loginController, registerController,getUser, getAuthors,changeAvatar,editUser} from '../controllers/authController.js';
import verifyToken from '../middlewares/authMiddlewares.js';
import authMiddleware from '../middlewares/authMiddlewares.js';

const router = express.Router()


router.post('/register',registerController)
router.post('/login',loginController)
router.get('/:id',getUser)
router.get('/', getAuthors)
router.post('/change-avatar',authMiddleware, changeAvatar)
router.patch('/edit-user',editUser)

//protect
router.get('/protect',verifyToken,(req,res)=>{
    res.send('i am protected')
})
export default router;