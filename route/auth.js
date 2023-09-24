import express from 'express'
import { forgotPasswordController, loginController, registerController, resetPasswordController, testController } from '../controllers/auth.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController);

//Forgot password || POST
router.post('/forgot-password', forgotPasswordController);
router.post('/reset-password/:token', resetPasswordController);

//test route
router.get('/test', requireSignIn, isAdmin, testController);

export default router