import express from 'express'
import { create_vivo_product, get_vivo_products,get_single_vivo_product, update_vivo_products, delete_single_vivo_product } from 
'../../controllers/brandsController/vivoController.js'



// router object
const vivo_router = express.Router()


vivo_router.post('/admin/oneplusproduct/new', create_vivo_product)
vivo_router.get('/oneplusproducts',get_vivo_products)
vivo_router.get('/product/:id', get_single_vivo_product);
vivo_router.put('/admin/product/:id',  update_vivo_products);
vivo_router.delete('/admin/product/:id',  delete_single_vivo_product);



export default vivo_router