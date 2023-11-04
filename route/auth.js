import express from 'express'
import { forgotPasswordController, getUserProfile, loginController, registerController, resetPasswordController, testController, updateUserPassword, updateUserProfile, logoutUser } from '../controllers/auth.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

//routing
router.post('/register', registerController)

router.post('/login', loginController);

router.post('/forgot-password', forgotPasswordController);

router.post('/reset-password/:token', resetPasswordController);

router.get('/me', requireSignIn, getUserProfile);

router.put('/password/update', requireSignIn, updateUserPassword);

router.put('/update', requireSignIn, updateUserProfile);

router.get('/logout', logoutUser);

//test route
router.get('/test', requireSignIn, isAdmin, testController);

//protected User route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

export default router