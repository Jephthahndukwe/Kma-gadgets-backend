import express from 'express'
import { create_gionee_product, get_gionee_products,get_single_gionee_product, update_gionee_products, delete_single_gionee_product } from 
'../../controllers/brandsController/gioneeController.js'



// router object
const gionee_router = express.Router()


gionee_router.post('/admin/oneplusproduct/new', create_gionee_product)
gionee_router.get('/oneplusproducts',get_gionee_products)
gionee_router.get('/product/:id', get_single_gionee_product);
gionee_router.put('/admin/product/:id',  update_gionee_products);
gionee_router.delete('/admin/product/:id',  delete_single_gionee_product);



export default gionee_router