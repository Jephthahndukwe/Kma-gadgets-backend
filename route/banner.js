import express from 'express'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'
import { createBannerController, deleteBannerController, getAdminBannerController, getBannerController, updateBannerController } from '../controllers/banner.js'




//router object
const router = express.Router()


router.post('/admin/banner/new', requireSignIn, isAdmin, createBannerController);

router.get('/banners', getBannerController);

router.get('/admin/banners', requireSignIn, isAdmin, getAdminBannerController);

router.put('/admin/banner/:id', requireSignIn, isAdmin, updateBannerController);

router.delete('/admin/banner/:id', requireSignIn, isAdmin, deleteBannerController);


export default router