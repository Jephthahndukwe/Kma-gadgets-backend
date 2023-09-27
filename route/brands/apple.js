import express from 'express'
import { create_apple_product, get_apple_products,get_single_apple_product, update_apple_products, delete_single_apple_product } from 
'../../controllers/brandsController/appleController.js'



// router object
const apple_router = express.Router()


apple_router.post('/admin/oneplusproduct/new', create_apple_product)
apple_router.get('/oneplusproducts',get_apple_products)
apple_router.get('/product/:id', get_single_apple_product);
apple_router.put('/admin/product/:id',  update_apple_products);
apple_router.delete('/admin/product/:id',  delete_single_apple_product);



export default apple_router