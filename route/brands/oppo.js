import express from 'express'
import { create_oppo_product, get_oppo_products,get_single_oppo_product, update_oppo_products, delete_single_oppo_product } from 
'../../controllers/brandsController/oppoController.js'



// router object
const oppo_router = express.Router()


oppo_router.post('/admin/oneplusproduct/new', create_oppo_product)
oppo_router.get('/oneplusproducts',get_oppo_products)
oppo_router.get('/product/:id', get_single_oppo_product);
oppo_router.put('/admin/product/:id',  update_oppo_products);
oppo_router.delete('/admin/product/:id',  delete_single_oppo_product);



export default oppo_router