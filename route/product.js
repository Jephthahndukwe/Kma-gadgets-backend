import express from 'express'
import { createProductController, deleteProductController, getAdminProductsController, getProductController, getSingleProductController, updateProductController } from '../controllers/Product.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';


//router object
const router = express.Router()

router.post('/admin/product/new', requireSignIn, isAdmin, createProductController);

router.get('/products', getProductController);

router.get('/admin/products', requireSignIn, isAdmin, getAdminProductsController);

router.get('/product/:id', getSingleProductController);

router.put('/admin/product/:id', requireSignIn, isAdmin, updateProductController);

router.delete('/admin/product/:id', requireSignIn, isAdmin, deleteProductController);












export default router