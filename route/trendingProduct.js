import express from 'express'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'
import { createTrendingProductController, deleteTrendingProductController, getAdminTrendingProductController, getTrendingProductController, getSingleTrendingProductController, updateTrendingProductController } from '../controllers/trendingProduct.js'




//router object
const router = express.Router()


router.post('/admin/trending-Product/new', requireSignIn, isAdmin, createTrendingProductController);

router.get('/trending-Products', getTrendingProductController);

router.get('/admin/trending-Products', requireSignIn, isAdmin, getAdminTrendingProductController);

router.get('/trending-Product/:id', getSingleTrendingProductController);

router.put('/admin/trending-Product/:id', requireSignIn, isAdmin, updateTrendingProductController);

router.delete('/admin/trending-Product/:id', requireSignIn, isAdmin, deleteTrendingProductController);


export default router