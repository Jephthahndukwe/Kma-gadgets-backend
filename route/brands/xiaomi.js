import express from 'express'
import { create_xiaomi_product, get_xiaomi_products,get_single_xiaomi_product, update_xiaomi_products, delete_single_xiaomi_product } from 
'../../controllers/brandsController/xiaomiController.js'



// router object
const xiaomi_router = express.Router()


xiaomi_router.post('/admin/oneplusproduct/new', create_xiaomi_product)
xiaomi_router.get('/oneplusproducts',get_xiaomi_products)
xiaomi_router.get('/product/:id', get_single_xiaomi_product);
xiaomi_router.put('/admin/product/:id',  update_xiaomi_products);
xiaomi_router.delete('/admin/product/:id',  delete_single_xiaomi_product);



export default xiaomi_router