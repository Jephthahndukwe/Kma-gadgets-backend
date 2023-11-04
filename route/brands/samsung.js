import express from 'express'
import { create_samsung_product, get_samsung_products,get_single_samsung_product, update_samsung_products, delete_single_samsung_product } from 
'../../controllers/brandsController/samsungController.js'



// router object
const samsung_router = express.Router()


samsung_router.post('/admin/oneplusproduct/new', create_samsung_product)
samsung_router.get('/oneplusproducts',get_samsung_products)
samsung_router.get('/product/:id', get_single_samsung_product);
samsung_router.put('/admin/product/:id',  update_samsung_products);
samsung_router.delete('/admin/product/:id',  delete_single_samsung_product);



export default samsung_router