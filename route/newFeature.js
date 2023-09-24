import express from 'express'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'
import { createNewFeatureController, deleteNewFeatureController, getAdminNewFeatureController, getNewFeatureController, getSingleNewFeatureController, updateNewFeatureController } from '../controllers/newFeature.js'




//router object
const router = express.Router()


router.post('/admin/feature-product/new', requireSignIn, isAdmin, createNewFeatureController);

router.get('/feature-products', getNewFeatureController);

router.get('/admin/feature-products', requireSignIn, isAdmin, getAdminNewFeatureController);

router.get('/feature-product/:id', getSingleNewFeatureController);

router.put('/admin/feature-product/:id', requireSignIn, isAdmin, updateNewFeatureController);

router.delete('/admin/feature-product/:id', requireSignIn, isAdmin, deleteNewFeatureController);


export default router